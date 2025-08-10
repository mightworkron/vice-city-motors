
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface ContactEmailProps {
  name: string
  email: string
  message: string
  form: string
  submittedAt: string
}

export const ContactEmail = ({
  name,
  email,
  message,
  form,
  submittedAt,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New {form} submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={content}>
          <Heading style={h1}>New {form} Submission</Heading>
          
          <Section style={detailsSection}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
            
            <Text style={label}>Form:</Text>
            <Text style={value}>{form}</Text>
            
            <Text style={label}>Submitted At:</Text>
            <Text style={value}>{submittedAt}</Text>
          </Section>
          
          <Section style={messageSection}>
            <Text style={label}>Message:</Text>
            <div style={messageBox}>
              {String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              Reply directly to this email to respond to {name}.
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default ContactEmail

// Styles
const main = {
  backgroundColor: '#f8f9fa',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}

const content = {
  padding: '32px',
}

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '28px',
  margin: '0 0 24px 0',
}

const detailsSection = {
  marginBottom: '24px',
}

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const value = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '0 0 16px 0',
  lineHeight: '20px',
}

const messageSection = {
  marginBottom: '32px',
}

const messageBox = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '16px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#1a1a1a',
  whiteSpace: 'pre-wrap' as const,
}

const footer = {
  borderTop: '1px solid #e5e7eb',
  paddingTop: '20px',
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
  textAlign: 'center' as const,
}
