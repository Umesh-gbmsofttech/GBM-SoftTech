import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section, Container, SectionHeader, TwoColumn } from "@components/ui/Section";
import { HoverCard, MutedText } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { EmailOutlined, PhoneOutlined, LocationOnOutlined } from "@mui/icons-material";

const FormGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const ContactCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5)
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5)
}));

const OfficeMap = styled(Box)(({ theme }) => ({
  height: 160,
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(120deg, ${theme.palette.primary.main}22, ${theme.palette.secondary.main
    }22)`
}));

const FAQList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5)
}));

const SideStack = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3)
}));

export const ContactPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Get in Touch</Typography>
            <MutedText variant="body2">We�d love to hear from you. Let�s start a conversation.</MutedText>
          </SectionHeader>
          <TwoColumn>
            <ContactCard>
              <Typography variant="h6">Send us a Message</Typography>
              <FormGrid>
                <TextField label="Name" placeholder="Your full name" fullWidth />
                <TextField label="Email" placeholder="your.email@example.com" fullWidth />
                <TextField label="Service Type" select fullWidth>
                  {[
                    "Website Development",
                    "Mobile App Development",
                    "Digital Marketing",
                    "Custom Solutions"
                  ].map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField label="Message" multiline rows={4} fullWidth />
                <Button variant="contained">Send Message</Button>
              </FormGrid>
            </ContactCard>
            <SideStack>
              <ContactCard>
                <Typography variant="h6">Our Office</Typography>
                <OfficeMap />
                <MutedText variant="body2">Pune, India</MutedText>
              </ContactCard>
              <ContactCard>
                <Typography variant="h6">Contact Information</Typography>
                <InfoRow>
                  <EmailOutlined />
                  <MutedText variant="body2">gbmsofttech@gmail.com</MutedText>
                </InfoRow>
                <InfoRow>
                  <PhoneOutlined />
                  <MutedText variant="body2">+91 87660 78570</MutedText>
                </InfoRow>
                <InfoRow>
                  <LocationOnOutlined />
                  <MutedText variant="body2">Pune, India</MutedText>
                </InfoRow>
              </ContactCard>
              <ContactCard>
                <Typography variant="h6">Follow Us</Typography>
                <MutedText variant="body2">LinkedIn . Facebook . Instagram</MutedText>
              </ContactCard>
            </SideStack>
          </TwoColumn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Frequently Asked Questions</Typography>
          </SectionHeader>
          <HoverCard>
            <FAQList>
              {[
                {
                  q: "What services do you offer?",
                  a: "We provide web, mobile, cloud solutions, and UX/UI design."
                },
                {
                  q: "How long does a typical project take?",
                  a: "Most projects range from 4-12 weeks depending on complexity."
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes, we offer comprehensive maintenance and support packages."
                },
                {
                  q: "What technologies do you work with?",
                  a: "React, Angular, Node.js, Python, Flutter, and modern cloud platforms."
                }
              ].map((item) => (
                <Box key={item.q}>
                  <Typography variant="subtitle2">{item.q}</Typography>
                  <MutedText variant="body2">{item.a}</MutedText>
                </Box>
              ))}
            </FAQList>
          </HoverCard>
        </Container>
      </Section>
    </PageTransition>
  );
};
