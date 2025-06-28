// emails/client-confirmation-simple.tsx
import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
} from "@react-email/components";

export function ClientConfirmationEmailSimple({
  name,
  supportType,
}: {
  name: string;
  supportType: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={heading}>Thank You for Your Application!</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>

            <Text style={paragraph}>
              We&apos;ve received your application for <strong>{supportType}</strong>{" "}
              support. Our team will review it and contact you within{" "}
              <strong>24-48 hours</strong>.
            </Text>

            <Text style={paragraph}>
              In the meantime, you can explore our resources:
            </Text>

            <Section style={links}>
              <Link href="https://testprep.com/resources" style={link}>
                Learning Resources
              </Link>
              <br />
              <Link href="https://testprep.com/tutors" style={link}>
                Meet Our Tutors
              </Link>
            </Section>

            <Text style={paragraph}>
              Questions? Reply to this email or contact us at{" "}
              <Link href="mailto:support@testprep.com" style={link}>
                support@testprep.com
              </Link>
            </Text>

            <Text style={paragraph}>
              Best regards,
              <br />
              The TestPrep Team
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>TestPrep Student Support</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Minimal styles
const main = {
  backgroundColor: "#f5f7fa",
  padding: "20px 0",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  maxWidth: "600px",
  padding: "20px",
};

const header = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const heading = {
  color: "#1e293b",
  fontSize: "22px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  padding: "20px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#334155",
  margin: "0 0 20px",
};

const links = {
  margin: "0 0 25px",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "16px",
};

const footer = {
  borderTop: "1px solid #e2e8f0",
  padding: "20px 0 0",
  textAlign: "center" as const,
};

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
};
