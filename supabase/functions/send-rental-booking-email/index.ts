
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import React from "npm:react@18.3.1";
import { RentalBookingEmail } from "./_templates/rental-booking-email.tsx";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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
}

// Helper function to parse multiple email recipients
const parseRecipients = (recipientString: string): string[] => {
  if (!recipientString) return [];
  
  // Split by comma or semicolon and clean up whitespace
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
    console.log("Received booking request:", requestData);

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 
      'vehiclePreference', 'startDate', 'endDate', 
      'pickupLocation', 'licenseNumber', 'licenseState'
    ];

    for (const field of requiredFields) {
      if (!requestData[field]) {
        console.error(`Missing required field: ${field}`);
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
    }

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
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        email: requestData.email,
        phone: requestData.phone,
        vehiclePreference: requestData.vehiclePreference,
        startDate: requestData.startDate,
        endDate: requestData.endDate,
        pickupLocation: requestData.pickupLocation,
        licenseNumber: requestData.licenseNumber,
        licenseState: requestData.licenseState,
        specialRequests: requestData.specialRequests,
        submittedAt: submittedAt,
      })
    );

    console.log("Sending email...");

    // Send the email
    const emailResponse = await resend.emails.send({
      from: Deno.env.get("RESEND_FROM_EMAIL") || "noreply@example.com",
      to: recipientEmails,
      replyTo: requestData.email,
      subject: `New Exotic Rental Booking Request from ${requestData.firstName} ${requestData.lastName}`,
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
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
