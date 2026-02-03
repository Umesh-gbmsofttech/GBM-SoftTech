import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Section, Container, CardGrid, SectionHeader } from "@components/ui/Section";
import { FadeInUp, fadeInUpVariant, staggerVariant } from "@components/animations/motion";
import { GradientButton, HoverCard, IconBadge, MutedText, Pill } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { StatRow, StatCard, StatValue } from "@components/ui/Tags";
import { Suspense, lazy } from "react";
import { LightbulbOutlined, RocketLaunchOutlined, HandshakeOutlined } from "@mui/icons-material";

const ThreeScene = lazy(() => import("@three/ThreeScene").then((mod) => ({ default: mod.ThreeScene })));

const HeroWrap = styled(Section)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(12)
}));

const HeroGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(6),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const HeroCanvas = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 420,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[2],
  background: `linear-gradient(140deg, ${theme.palette.primary.main}15, transparent)`
}));

const ServiceCard = styled(HoverCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5)
}));

const PortfolioCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const PortfolioImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 160,
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(120deg, ${theme.palette.primary.main}33, ${
    theme.palette.secondary.main
  }33)`
}));

const ClientRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

const ClientBadge = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  fontWeight: 600
}));

const TestimonialCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const CTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${
    theme.palette.primary.main
  })`,
  color: theme.palette.primary.contrastText,
  textAlign: "center"
}));

const SpacedTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const SpacedText = styled(MutedText)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const ActionRow = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3)
}));

const CTAButton = styled(GradientButton)(({ theme }) => ({
  marginTop: theme.spacing(3)
}));

export const HomePage = () => {
  const theme = useTheme();

  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <HeroWrap>
        <Container>
          <HeroGrid>
            <FadeInUp variants={fadeInUpVariant} initial="hidden" whileInView="visible">
              <Pill>Transforming Ideas into Digital Realities</Pill>
              <SpacedTitle variant="h2">Build Hyper-Responsive & Scalable Digital Solutions</SpacedTitle>
              <SpacedText variant="body1">
                We craft modern digital products with future-ready architecture, fast delivery, and
                a focus on measurable outcomes.
              </SpacedText>
              <ActionRow direction="row" spacing={2}>
                <GradientButton variant="contained">Get Started</GradientButton>
                <Button variant="outlined">View Services</Button>
              </ActionRow>
            </FadeInUp>
            <HeroCanvas>
              <Suspense fallback={null}>
                <ThreeScene color={theme.palette.primary.main} />
              </Suspense>
            </HeroCanvas>
          </HeroGrid>
          <StatRow>
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "50+" },
              { label: "Years Experience", value: "5+" },
              { label: "Team Members", value: "25+" }
            ].map((stat) => (
              <StatCard key={stat.label}>
                <StatValue variant="h4">{stat.value}</StatValue>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </StatCard>
            ))}
          </StatRow>
        </Container>
      </HeroWrap>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Services</Typography>
            <MutedText variant="body2">
              Comprehensive digital solutions tailored to meet your business needs.
            </MutedText>
          </SectionHeader>
          <FadeInUp variants={staggerVariant} initial="hidden" whileInView="visible">
            <CardGrid>
              {[
                {
                  icon: <RocketLaunchOutlined />,
                  title: "Website Development",
                  desc: "Modern websites and web apps built for performance."
                },
                {
                  icon: <LightbulbOutlined />,
                  title: "Mobile App Development",
                  desc: "Native and cross-platform mobile apps for iOS and Android."
                },
                {
                  icon: <HandshakeOutlined />,
                  title: "Digital Marketing",
                  desc: "SEO, PPC, social and growth strategies."
                }
              ].map((service) => (
                <ServiceCard key={service.title}>
                  <IconBadge>{service.icon}</IconBadge>
                  <Typography variant="h6">{service.title}</Typography>
                  <MutedText variant="body2">{service.desc}</MutedText>
                  <Button size="small">Learn More</Button>
                </ServiceCard>
              ))}
            </CardGrid>
          </FadeInUp>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Products</Typography>
            <MutedText variant="body2">Innovative solutions designed to solve real problems.</MutedText>
          </SectionHeader>
          <CardGrid>
            {[
              { title: "Skillmate", desc: "Personalized learning + career placement platform." },
              { title: "MyGarage", desc: "On-demand mechanic service and vehicle management." }
            ].map((product) => (
              <HoverCard key={product.title}>
                <Typography variant="h6">{product.title}</Typography>
                <MutedText variant="body2">{product.desc}</MutedText>
                <Button size="small">Learn More</Button>
              </HoverCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Portfolio</Typography>
            <MutedText variant="body2">Showcasing the work behind our success stories.</MutedText>
          </SectionHeader>
          <CardGrid>
            {["E-commerce Platform", "Fitness App", "Corporate Website"].map((name) => (
              <PortfolioCard key={name}>
                <PortfolioImage />
                <Typography variant="subtitle1">{name}</Typography>
                <MutedText variant="body2">Custom digital solution built for growth.</MutedText>
              </PortfolioCard>
            ))}
          </CardGrid>
          <ClientRow>
            {["Client A", "Client B", "Client C", "Client D"].map((client) => (
              <ClientBadge key={client}>{client}</ClientBadge>
            ))}
          </ClientRow>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">What Our Clients Say</Typography>
          </SectionHeader>
          <CardGrid>
            {["Ankit", "Sara", "Dev"].map((name) => (
              <TestimonialCard key={name}>
                <Typography variant="body1">
                  “GBM SoftTech delivered on every promise. The product quality and delivery speed
                  exceeded expectations.”
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar>{name[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle2">{name}</Typography>
                    <MutedText variant="caption">CTO, Fintech</MutedText>
                  </Box>
                </Stack>
              </TestimonialCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <Typography variant="h4">Ready to Start Your Project?</Typography>
            <SpacedText variant="body2">Let’s build something remarkable together.</SpacedText>
            <CTAButton variant="contained">Contact Us Today</CTAButton>
          </CTASection>
        </Container>
      </Section>
    </PageTransition>
  );
};
