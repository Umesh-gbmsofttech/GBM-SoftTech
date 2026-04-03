import { Typography, Box } from "@mui/material";
import { Section, Container, SectionHeader, TwoColumn } from "@components/ui/Section";
import { HoverCard, IconBadge, MutedText } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { StatRow } from "@components/ui/Tags";
import { 
  EmojiObjectsOutlined, 
  VisibilityOutlined, 
  StarsOutlined 
} from "@mui/icons-material";
import { StoryCard, ValueItem, AchievementCard } from "../sections/AboutSections";

export const AboutPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {/* 1. Mission, Vision, Story */}
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3" fontWeight="800">About GBM SoftTech</Typography>
            <MutedText variant="body1">Innovating technology solutions for a better tomorrow.</MutedText>
          </SectionHeader>
          
          <TwoColumn>
            <HoverCard>
              <IconBadge sx={{ bgcolor: 'primary.main', color: '#fff', mb: 2 }}>
                <EmojiObjectsOutlined />
              </IconBadge>
              <Typography variant="h5" fontWeight="700" gutterBottom>Our Mission</Typography>
              <MutedText variant="body2">
                To deliver innovative software solutions that empower businesses with cutting-edge 
                technology and exceptional service.
              </MutedText>
            </HoverCard>

            <HoverCard>
              <IconBadge sx={{ bgcolor: 'primary.main', color: '#fff', mb: 2 }}>
                <VisibilityOutlined />
              </IconBadge>
              <Typography variant="h5" fontWeight="700" gutterBottom>Our Vision</Typography>
              <MutedText variant="body2">
                To be a leading technology partner recognized for excellence in software development 
                and transformative digital solutions.
              </MutedText>
            </HoverCard>
          </TwoColumn>

          <StoryCard>
            <IconBadge sx={{ bgcolor: 'warning.main', color: '#fff' }}>
              <StarsOutlined />
            </IconBadge>
            <Typography variant="h5" fontWeight="700">Our Story</Typography>
            <MutedText variant="body1" sx={{ maxWidth: 800 }}>
              Founded with a passion for technology and innovation, GBM SoftTech has been at the 
              forefront of digital transformation. Our journey is marked by continuous learning, 
              adaptation, and a unwavering commitment to excellence.
            </MutedText>
          </StoryCard>
        </Container>
      </Section>

      {/* 2. Milestones */}
      <Section sx={{ bgcolor: 'action.hover' }}>
        <Container>
          <SectionHeader>
            <Typography variant="h4" fontWeight="800">Achievements & Milestones</Typography>
          </SectionHeader>
          <StatRow>
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "100+" },
              { label: "Years Experience", value: "5+" },
              { label: "Team Members", value: "15+" }
            ].map((stat) => (
              <AchievementCard key={stat.label} {...stat} />
            ))}
          </StatRow>
        </Container>
      </Section>

      {/* 3. Why Choose Us */}
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h4" fontWeight="800">Why Choose GBM SoftTech</Typography>
          </SectionHeader>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 3 
          }}>
            {[
              { title: "100% IT Training Placement", desc: "End-to-end placement support for IT trainees via Skillmate." },
              { title: "Anytime Vehicle Solutions", desc: "24/7 support through our proprietary MyGarage platform." },
              { title: "Innovative Solutions", desc: "Custom software tailored precisely to your specific business needs." },
              { title: "24/7 Support", desc: "Round-the-clock technical support to ensure your systems never sleep." }
            ].map((item) => (
              <ValueItem key={item.title} {...item} />
            ))}
          </Box>
        </Container>
      </Section>
    </PageTransition>
  );
};