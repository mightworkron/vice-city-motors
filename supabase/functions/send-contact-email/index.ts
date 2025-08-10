
import { Resend } from "npm:resend@2.0.0";
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import { ContactEmail } from './_templates/contact-email.tsx'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
  form?: string;
}

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
    const recipientEmail = Deno.env.get("CONTACT_RECIPIENT_EMAIL");

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

    if (!recipientEmail) {
      console.error("CONTACT_RECIPIENT_EMAIL is missing");
      return new Response(JSON.stringify({ error: "Server not configured - missing recipient email" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { name, email, message, form }: ContactFormRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const resend = new Resend(apiKey);

    const formType = form || "Contact Form";
    const subject = `New ${formType} Inquiry from ${name}`;
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

    console.log("Rendering React Email template");
    const html = await renderAsync(
      React.createElement(ContactEmail, {
        name,
        email,
        message,
        form: formType,
        submittedAt,
      })
    );

    const text = `
New ${formType} Submission - The Showroom Miami

Name: ${name}
Email: ${email}
Form: ${formType}
Submitted At: ${submittedAt}

Message:
${message}
    `.trim();

    console.log("Sending email via Resend");
    console.log("From:", fromEmail);
    console.log("To:", recipientEmail);
    console.log("Subject:", subject);

    const response = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject,
      html,
      text,
      reply_to: email,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return new Response(JSON.stringify({ 
        error: "Failed to send email", 
        details: response.error.message || "Unknown error from email service"
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
      details: error.message || "Unknown server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
