import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section, Container, SectionHeader } from "@components/ui/Section";
import { HoverCard, MutedText, Pill } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";

const Hero = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: "center",
  background: `linear-gradient(120deg, ${theme.palette.primary.main}33, ${
    theme.palette.secondary.main
  }33)`,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(6)
}));

const JobList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6)
}));

const JobCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

const LifeGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const BenefitGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(3)
}));

const ApplyCard = styled(HoverCard)(({ theme }) => ({
  maxWidth: 420,
  margin: "0 auto",
  textAlign: "center"
}));

const ApplyForm = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3)
}));

const CenterHeader = styled(SectionHeader)(() => ({
  textAlign: "center"
}));

export const CareersPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <Hero>
            <Pill>Join Our Team</Pill>
            <Typography variant="h3">Shape the future of technology with GBM SoftTech</Typography>
            <MutedText variant="body2">Explore opportunities and grow with us.</MutedText>
          </Hero>
          <Typography variant="h5">Open Positions</Typography>
          <JobList>
            {["Senior Software Engineer", "UX/UI Designer", "Data Scientist"].map((role) => (
              <JobCard key={role}>
                <Box>
                  <Typography variant="subtitle1">{role}</Typography>
                  <MutedText variant="body2">Full-time · Pune</MutedText>
                </Box>
                <Button variant="contained">Apply Now</Button>
              </JobCard>
            ))}
          </JobList>

          <Typography variant="h5">Life at GBM SoftTech</Typography>
          <LifeGrid>
            {["Collaborative Environment", "Innovation Labs", "Growth"].map((item) => (
              <HoverCard key={item}>
                <Typography variant="subtitle1">{item}</Typography>
                <MutedText variant="body2">Supportive culture focused on learning.</MutedText>
              </HoverCard>
            ))}
          </LifeGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CenterHeader>
            <Typography variant="h5">Benefits & Perks</Typography>
          </CenterHeader>
          <BenefitGrid>
            {["Competitive Salary", "Remote Work", "Health Insurance", "Learning Budget"].map(
              (item) => (
                <HoverCard key={item}>
                  <Typography variant="subtitle1">{item}</Typography>
                  <MutedText variant="body2">Designed to support you.</MutedText>
                </HoverCard>
              )
            )}
          </BenefitGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <ApplyCard>
            <Typography variant="h5">Ready to Join Us?</Typography>
            <MutedText variant="body2">
              Submit your resume and we will reach out with next steps.
            </MutedText>
            <ApplyForm>
              <TextField placeholder="Full Name" fullWidth />
              <TextField placeholder="Email Address" fullWidth />
              <Button variant="contained">Submit Resume</Button>
            </ApplyForm>
          </ApplyCard>
        </Container>
      </Section>
    </PageTransition>
  );
};
