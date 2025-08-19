import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";
import { RentalBookingEmail } from "./_templates/rental-booking-email.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-XSS-Protection": "1; mode=block",
  "Content-Security-Policy": "default-src 'self'; script-src 'none'; object-src 'none'; style-src 'unsafe-inline'",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

interface RentalBookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehiclePreference: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  licenseNumber: string;
  licenseState: string;
  specialRequests?: string;
  form: string;
  website?: string; // Honeypot field
}

// Input validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 100;
};

const isValidName = (name: string): boolean => {
  return /^[a-zA-Z\s'-]+$/.test(name) && name.length >= 2 && name.length <= 50;
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};

// Simple rate limiting storage
const rateLimitMap = new Map<string, number>();

const isRateLimited = (identifier: string, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const lastRequest = rateLimitMap.get(identifier);
  
  if (lastRequest && now - lastRequest < windowMs) {
    return true;
  }
  
  rateLimitMap.set(identifier, now);
  
  // Clean up old entries
  if (rateLimitMap.size > 1000) {
    const cutoff = now - windowMs * 2;
    for (const [key, timestamp] of rateLimitMap.entries()) {
      if (timestamp < cutoff) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return false;
};

// Helper function to parse multiple email recipients
const parseRecipients = (recipientString: string): string[] => {
  if (!recipientString) return [];
  
  return recipientString
    .split(/[,;]/)
    .map(email => email.trim())
    .filter(email => email.length > 0);
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Rental booking email function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: RentalBookingRequest = await req.json();
    console.log("Received booking request for:", requestData.email);

    // Honeypot check - if website field is filled, it's likely a bot
    if (requestData.website && requestData.website.trim() !== '') {
      console.log("Bot submission detected via honeypot for:", requestData.email);
      return new Response(
        JSON.stringify({ error: "Invalid submission" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Rate limiting check
    const rateLimitKey = `rental-${requestData.email}`;
    if (isRateLimited(rateLimitKey)) {
      console.log("Rate limit exceeded for:", requestData.email);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Enhanced validation
    const validationErrors: string[] = [];

    if (!isValidName(requestData.firstName)) {
      validationErrors.push("Invalid first name");
    }
    if (!isValidName(requestData.lastName)) {
      validationErrors.push("Invalid last name");
    }
    if (!isValidEmail(requestData.email)) {
      validationErrors.push("Invalid email address");
    }
    if (!isValidPhone(requestData.phone)) {
      validationErrors.push("Invalid phone number");
    }

    // Check required fields with length limits
    const requiredFields = [
      { field: 'vehiclePreference', maxLength: 200 },
      { field: 'startDate', maxLength: 20 },
      { field: 'endDate', maxLength: 20 },
      { field: 'pickupLocation', maxLength: 200 },
      { field: 'licenseNumber', maxLength: 20 },
      { field: 'licenseState', maxLength: 20 }
    ];

    for (const { field, maxLength } of requiredFields) {
      const value = requestData[field as keyof RentalBookingRequest];
      if (!value || typeof value !== 'string' || value.length === 0) {
        validationErrors.push(`Missing required field: ${field}`);
      } else if (value.length > maxLength) {
        validationErrors.push(`${field} is too long`);
      }
    }

    // Validate special requests length if provided
    if (requestData.specialRequests && requestData.specialRequests.length > 1000) {
      validationErrors.push("Special requests is too long");
    }

    if (validationErrors.length > 0) {
      console.error("Validation errors for", requestData.email, ":", validationErrors);
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validationErrors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all text inputs
    const sanitizedData = {
      ...requestData,
      firstName: sanitizeInput(requestData.firstName),
      lastName: sanitizeInput(requestData.lastName),
      vehiclePreference: sanitizeInput(requestData.vehiclePreference),
      pickupLocation: sanitizeInput(requestData.pickupLocation),
      licenseNumber: sanitizeInput(requestData.licenseNumber),
      licenseState: sanitizeInput(requestData.licenseState),
      specialRequests: requestData.specialRequests ? sanitizeInput(requestData.specialRequests) : undefined,
    };

    // Parse multiple recipients
    const recipientEmailString = Deno.env.get("CONTACT_RECIPIENT_EMAIL") || "admin@example.com";
    const recipientEmails = parseRecipients(recipientEmailString);
    
    if (recipientEmails.length === 0) {
      console.error("No valid recipient emails found, using fallback");
      recipientEmails.push("admin@example.com");
    }

    console.log("Parsed recipient emails:", recipientEmails);

    // Create formatted timestamp in EST
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    });

    console.log("Rendering email template...");

    // Render the email template
    const html = await renderAsync(
      React.createElement(RentalBookingEmail, {
        firstName: sanitizedData.firstName,
        lastName: sanitizedData.lastName,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        vehiclePreference: sanitizedData.vehiclePreference,
        startDate: sanitizedData.startDate,
        endDate: sanitizedData.endDate,
        pickupLocation: sanitizedData.pickupLocation,
        licenseNumber: sanitizedData.licenseNumber,
        licenseState: sanitizedData.licenseState,
        specialRequests: sanitizedData.specialRequests,
        submittedAt: submittedAt,
      })
    );

    console.log("Sending email...");

    // Send the email
    const emailResponse = await resend.emails.send({
      from: Deno.env.get("RESEND_FROM_EMAIL") || "noreply@example.com",
      to: recipientEmails,
      replyTo: requestData.email,
      subject: `New Exotic Rental Booking Request from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking request sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in rental booking email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send booking request", 
        details: "Internal server error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
