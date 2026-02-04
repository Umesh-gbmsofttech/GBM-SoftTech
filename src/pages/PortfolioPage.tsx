import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section, Container, SectionHeader, CardGrid } from "@components/ui/Section";
import { HoverCard, MutedText, Pill } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { StatRow, StatCard, StatValue } from "@components/ui/Tags";

const FilterRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  justifyContent: "center",
  marginBottom: theme.spacing(4),
  flexWrap: "wrap"
}));

const FilterButton = styled(Pill)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`
}));

const PortfolioCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const PortfolioImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 180,
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(120deg, ${theme.palette.primary.main}33, ${
    theme.palette.secondary.main
  }33)`
}));

const CaseStudy = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: theme.spacing(3),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const CaseStudyList = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(1)
}));

export const PortfolioPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Portfolio</Typography>
            <MutedText variant="body2">Showcasing excellence in digital innovation and success.</MutedText>
          </SectionHeader>
          <FilterRow>
            {["All Projects", "Web Development", "Mobile Apps", "Marketing", "Custom Solutions"].map(
              (item) => (
                <FilterButton key={item}>{item}</FilterButton>
              )
            )}
          </FilterRow>
          <CardGrid>
            {[
              { title: "E-commerce Platform", tag: "Web Development" },
              { title: "Fitness Tracking App", tag: "Mobile Apps" },
              { title: "Brand Awareness Campaign", tag: "Marketing" }
            ].map((item) => (
              <PortfolioCard key={item.title}>
                <PortfolioImage />
                <Typography variant="subtitle1">{item.title}</Typography>
                <MutedText variant="body2">{item.tag}</MutedText>
              </PortfolioCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Featured Case Study</Typography>
          </SectionHeader>
          <CaseStudy>
            <PortfolioImage />
            <div>
              <Typography variant="h6">Enterprise SaaS Platform</Typography>
              <MutedText variant="body2">
                Delivered a SaaS solution that increased productivity by 45% and reduced operational
                costs by 30%.
              </MutedText>
              <CaseStudyList>
                {[
                  "68% increase in user engagement",
                  "99.9% uptime reliability",
                  "Seamless third-party integrations"
                ].map((item) => (
                  <Typography key={item} variant="body2" color="text.secondary">
                    � {item}
                  </Typography>
                ))}
              </CaseStudyList>
            </div>
          </CaseStudy>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Our Impact in Numbers</Typography>
          </SectionHeader>
          <StatRow>
            {[
              { label: "Projects Completed", value: "350+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Years Experience", value: "10+" }
            ].map((stat) => (
              <StatCard key={stat.label}>
                <StatValue variant="h5">{stat.value}</StatValue>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </StatCard>
            ))}
          </StatRow>
        </Container>
      </Section>
    </PageTransition>
  );
};
