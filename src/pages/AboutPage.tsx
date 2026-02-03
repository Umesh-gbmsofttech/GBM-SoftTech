import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section, Container, SectionHeader, TwoColumn } from "@components/ui/Section";
import { HoverCard, IconBadge, MutedText } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { StatRow, StatCard, StatValue } from "@components/ui/Tags";
import { EmojiObjectsOutlined, VisibilityOutlined, StarsOutlined, ThumbUpOutlined } from "@mui/icons-material";

const StoryCard = styled(HoverCard)(({ theme }) => ({
  gridColumn: "1 / -1"
}));

const ValueGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const AboutPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">About GBM SoftTech</Typography>
            <MutedText variant="body2">Innovating technology solutions for a better tomorrow.</MutedText>
          </SectionHeader>
          <TwoColumn>
            <HoverCard>
              <IconBadge>
                <EmojiObjectsOutlined />
              </IconBadge>
              <Typography variant="h6">Our Mission</Typography>
              <MutedText variant="body2">
                To deliver innovative software solutions that empower businesses with cutting-edge
                technology and exceptional service.
              </MutedText>
            </HoverCard>
            <HoverCard>
              <IconBadge>
                <VisibilityOutlined />
              </IconBadge>
              <Typography variant="h6">Our Vision</Typography>
              <MutedText variant="body2">
                To be a leading technology partner recognized for excellence in software development
                and transformative digital solutions.
              </MutedText>
            </HoverCard>
          </TwoColumn>
          <StoryCard>
            <IconBadge>
              <StarsOutlined />
            </IconBadge>
            <Typography variant="h6">Our Story</Typography>
            <MutedText variant="body2">
              Founded with a passion for technology and innovation, GBM SoftTech has been at the
              forefront of digital transformation. Our journey is marked by continuous learning,
              adaptation, and a commitment to excellence.
            </MutedText>
          </StoryCard>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Achievements & Milestones</Typography>
          </SectionHeader>
          <StatRow>
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Years Experience", value: "5+" },
              { label: "Team Members", value: "15+" }
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

      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4">Why Choose GBM SoftTech</Typography>
          </SectionHeader>
          <ValueGrid>
            {[
              { title: "100% IT Training Placement", desc: "End-to-end placement support for IT trainees." },
              { title: "Anytime Vehicle Solutions", desc: "24/7 support through our MyGarage platform." },
              { title: "Innovative Solutions", desc: "Custom software tailored to your specific needs." },
              { title: "24/7 Support", desc: "Round-the-clock technical support for your systems." }
            ].map((item) => (
              <HoverCard key={item.title}>
                <IconBadge>
                  <ThumbUpOutlined />
                </IconBadge>
                <Typography variant="subtitle1">{item.title}</Typography>
                <MutedText variant="body2">{item.desc}</MutedText>
              </HoverCard>
            ))}
          </ValueGrid>
        </Container>
      </Section>
    </PageTransition>
  );
};
