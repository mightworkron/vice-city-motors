
import { Resend } from "npm:resend@2.0.0";
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import { ContactEmail } from './_templates/contact-email.tsx'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-XSS-Protection": "1; mode=block",
};

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
  form?: string;
  website?: string; // Honeypot field
}

// Input validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 100;
};

const isValidName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100;
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

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL");
    const recipientEmailString = Deno.env.get("CONTACT_RECIPIENT_EMAIL");

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return new Response(JSON.stringify({ error: "Server not configured - missing API key" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!fromEmail) {
      console.error("RESEND_FROM_EMAIL is missing");
      return new Response(JSON.stringify({ error: "Server not configured - missing sender email" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!recipientEmailString) {
      console.error("CONTACT_RECIPIENT_EMAIL is missing");
      return new Response(JSON.stringify({ error: "Server not configured - missing recipient email" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const requestData: ContactFormRequest = await req.json();
    const { name, email, message, form, website } = requestData;

    // Honeypot check
    if (website && website.trim() !== '') {
      console.log("Bot submission detected via honeypot");
      return new Response(JSON.stringify({ error: "Invalid submission" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Rate limiting check
    const rateLimitKey = `contact-${email}`;
    if (isRateLimited(rateLimitKey)) {
      console.log("Rate limit exceeded for:", email);
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Enhanced validation
    const validationErrors: string[] = [];

    if (!name || !isValidName(name)) {
      validationErrors.push("Invalid name");
    }
    if (!email || !isValidEmail(email)) {
      validationErrors.push("Invalid email address");
    }
    if (!message || message.length < 10 || message.length > 2000) {
      validationErrors.push("Message must be between 10 and 2000 characters");
    }

    if (validationErrors.length > 0) {
      console.error("Validation errors:", validationErrors);
      return new Response(JSON.stringify({ error: "Validation failed", details: validationErrors }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);

    // Parse multiple recipients
    const recipientEmails = parseRecipients(recipientEmailString);
    
    if (recipientEmails.length === 0) {
      console.error("No valid recipient emails found");
      return new Response(JSON.stringify({ error: "Server not configured - no valid recipient emails" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Parsed recipient emails:", recipientEmails);

    const resend = new Resend(apiKey);

    const formType = form || "Contact Form";
    const subject = `New ${formType} Inquiry from ${sanitizedName}`;
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    console.log("Rendering React Email template");
    const html = await renderAsync(
      React.createElement(ContactEmail, {
        name: sanitizedName,
        email,
        message: sanitizedMessage,
        form: formType,
        submittedAt,
      })
    );

    const text = `
New ${formType} Submission - The Showroom Miami

Name: ${sanitizedName}
Email: ${email}
Form: ${formType}
Submitted At: ${submittedAt}

Message:
${sanitizedMessage}
    `.trim();

    console.log("Sending email via Resend");
    console.log("From:", fromEmail);
    console.log("To:", recipientEmails);
    console.log("Subject:", subject);

    const response = await resend.emails.send({
      from: fromEmail,
      to: recipientEmails,
      subject,
      html,
      text,
      reply_to: email,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return new Response(JSON.stringify({ 
        error: "Failed to send email", 
        details: "Email service error"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Email sent successfully:", response);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("send-contact-email error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to send email", 
      details: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
