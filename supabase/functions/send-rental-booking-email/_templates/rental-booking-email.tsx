
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from "npm:@react-email/components@0.0.22";
import * as React from "npm:react@18.3.1";

interface RentalBookingEmailProps {
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
  submittedAt: string;
}

export const RentalBookingEmail = ({
  firstName,
  lastName,
  email,
  phone,
  vehiclePreference,
  startDate,
  endDate,
  pickupLocation,
  licenseNumber,
  licenseState,
  specialRequests,
  submittedAt,
}: RentalBookingEmailProps) => (
  <Html>
    <Head />
    <Preview>New Exotic Rental Booking Form submission from {firstName} {lastName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Exotic Rental Booking Request</Heading>
        
        <Section style={section}>
          <Heading style={h2}>Personal Information</Heading>
          <Text style={text}><strong>Name:</strong> {firstName} {lastName}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Phone:</strong> {phone}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Heading style={h2}>Rental Details</Heading>
          <Text style={text}><strong>Vehicle Preference:</strong> {vehiclePreference}</Text>
          <Text style={text}><strong>Start Date:</strong> {startDate}</Text>
          <Text style={text}><strong>End Date:</strong> {endDate}</Text>
          <Text style={text}><strong>Pickup Location:</strong> {pickupLocation}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Heading style={h2}>Driver's License Information</Heading>
          <Text style={text}><strong>License Number:</strong> {licenseNumber}</Text>
          <Text style={text}><strong>License State:</strong> {licenseState}</Text>
        </Section>

        {specialRequests && (
          <>
            <Hr style={hr} />
            <Section style={section}>
              <Heading style={h2}>Special Requests</Heading>
              <Text style={text}>{specialRequests}</Text>
            </Section>
          </>
        )}

        <Hr style={hr} />

        <Text style={footer}>
          <strong>Submitted At:</strong> {submittedAt}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  marginTop: "0",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
  marginTop: "0",
};

const text = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "8px",
  marginTop: "0",
};

const section = {
  marginBottom: "20px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "20px",
};

export default RentalBookingEmail;
