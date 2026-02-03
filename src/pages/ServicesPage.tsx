import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Section, Container, SectionHeader, CardGrid } from "@components/ui/Section";
import { HoverCard, IconBadge, MutedText } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import {
  LanguageOutlined,
  SmartphoneOutlined,
  CampaignOutlined,
  AutoFixHighOutlined,
  BusinessOutlined,
  SupportAgentOutlined
} from "@mui/icons-material";

const CompareGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const List = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2)
}));

const Bullet = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.2),
  color: theme.palette.text.secondary
}));

const ColoredBadge = styled(IconBadge, {
  shouldForwardProp: (prop) => prop !== "tone"
})<{ tone: string }>(({ theme, tone }) => ({
  backgroundColor: tone,
  color: theme.palette.primary.contrastText
}));

export const ServicesPage = () => {
  const theme = useTheme();
  const tones = [
    theme.palette.primary.main,
    theme.palette.success.main,
    theme.palette.secondary.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.success.dark
  ];

  const services = [
    {
      title: "Website Development",
      desc: "Create stunning static and dynamic web experiences.",
      icon: <LanguageOutlined />
    },
    {
      title: "Mobile App Development",
      desc: "Build native and cross-platform mobile apps.",
      icon: <SmartphoneOutlined />
    },
    {
      title: "Digital Marketing",
      desc: "Boost your online presence with SEO and PPC.",
      icon: <CampaignOutlined />
    },
    {
      title: "Customized Solutions",
      desc: "Tailored software applications for unique needs.",
      icon: <AutoFixHighOutlined />
    },
    {
      title: "Software Consulting",
      desc: "Expert guidance on strategy and architecture.",
      icon: <BusinessOutlined />
    },
    {
      title: "Maintenance & Support",
      desc: "Continuous support to keep systems healthy.",
      icon: <SupportAgentOutlined />
    }
  ];

  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Services</Typography>
            <MutedText variant="body2">
              Comprehensive technology solutions to transform your business and drive digital
              success.
            </MutedText>
          </SectionHeader>
          <CardGrid>
            {services.map((service, index) => (
              <HoverCard key={service.title}>
                <ColoredBadge tone={tones[index % tones.length]}>{service.icon}</ColoredBadge>
                <Typography variant="h6">{service.title}</Typography>
                <MutedText variant="body2">{service.desc}</MutedText>
              </HoverCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Static vs Dynamic Websites</Typography>
            <MutedText variant="body2">Choose the right solution for your business needs.</MutedText>
          </SectionHeader>
          <CompareGrid>
            <HoverCard>
              <Typography variant="h6">Static Websites</Typography>
              <List>
                {[
                  "Fast loading speeds",
                  "Cost-effective development",
                  "Enhanced security",
                  "Perfect for portfolios"
                ].map((item) => (
                  <Bullet key={item}>• {item}</Bullet>
                ))}
              </List>
            </HoverCard>
            <HoverCard>
              <Typography variant="h6">Dynamic Websites</Typography>
              <List>
                {[
                  "Interactive user engagement",
                  "Real-time content updates",
                  "Database integrations",
                  "Scales with your business"
                ].map((item) => (
                  <Bullet key={item}>• {item}</Bullet>
                ))}
              </List>
            </HoverCard>
          </CompareGrid>
        </Container>
      </Section>
    </PageTransition>
  );
};
