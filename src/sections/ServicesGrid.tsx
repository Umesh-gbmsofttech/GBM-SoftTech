import React, { useState } from "react";
import { Typography, useTheme, Box, Stack, Grid, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "@components/ui/Section";
import {  MutedText } from "@components/ui/StyledCard";
import {
  LanguageOutlined,
  SmartphoneOutlined,
  CampaignOutlined,
  AutoFixHighOutlined,
  BusinessOutlined,
  SupportAgentOutlined,
  ArrowForward
} from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const ServiceIconCard = styled(motion.div)<{ active: boolean; tone: string }>(({ theme, active, tone }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  background: active ? alpha(tone, 0.1) : theme.palette.background.paper,
  border: `2px solid ${active ? tone : 'transparent'}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: active ? `0 10px 30px ${alpha(tone, 0.2)}` : "0 4px 12px rgba(0,0,0,0.03)",
  "&:hover": {
    transform: "scale(1.05)",
    borderColor: active ? tone : theme.palette.divider,
  },
}));

// --- DATA ---

const services = [
  { 
    id: 0,
    title: "Website Development", 
    desc: "We build high-performance web applications using the latest frameworks like React and Next.js. Our solutions focus on speed, SEO, and flawless user journeys to convert visitors into loyal customers.",
    icon: <LanguageOutlined />,
    tone: "#007FFF" // Azure Blue
  },
  { 
    id: 1,
    title: "Mobile App Development", 
    desc: "Reach your audience anywhere with native-quality mobile apps. We specialize in cross-platform development that ensures consistent performance across iOS and Android devices.",
    icon: <SmartphoneOutlined />,
    tone: "#34D399" // Emerald
  },
  { 
    id: 2,
    title: "Digital Marketing", 
    desc: "Grow your digital footprint with precision. From SEO strategy to high-ROI PPC campaigns, we use data analytics to ensure your brand reaches the right people at the right time.",
    icon: <CampaignOutlined />,
    tone: "#8B5CF6" // Violet
  },
  { 
    id: 3,
    title: "Customized Solutions", 
    desc: "Every business is unique. We develop bespoke software solutions tailored to your specific workflow, automating complex tasks and boosting operational efficiency.",
    icon: <AutoFixHighOutlined />,
    tone: "#F59E0B" // Amber
  },
  { 
    id: 4,
    title: "Software Consulting", 
    desc: "Leverage our expertise to navigate the complex tech landscape. We provide strategic roadmaps, architecture reviews, and digital transformation consulting to future-proof your business.",
    icon: <BusinessOutlined />,
    tone: "#6366F1" // Indigo
  },
  { 
    id: 5,
    title: "Maintenance & Support", 
    desc: "Peace of mind is part of the package. Our dedicated support team provides 24/7 monitoring, regular updates, and instant troubleshooting to keep your systems running at peak performance.",
    icon: <SupportAgentOutlined />,
    tone: "#EF4444" // Rose
  }
];

// --- MAIN COMPONENT ---

export const ServicesGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const activeService = services[activeIndex];

  return (
    <Section sx={{ py: 12 }}>
      <Container>
        {/* --- HEADING AREA --- */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="h2" fontWeight="900" gutterBottom sx={{ letterSpacing: -1 }}>
            Our <Box component="span" sx={{ color: 'primary.main' }}>Core Services</Box>
          </Typography>
          <MutedText variant="h6" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
            Empowering your business with cutting-edge technology and data-driven strategies designed for the modern era.
          </MutedText>
        </Box>

        <Grid container spacing={8} alignItems="flex-start">
          
          {/* --- LEFT SIDE: DESCRIPTION (Sticky) --- */}
          <Grid item xs={12} md={5} sx={{ position: { md: 'sticky' }, top: 100 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Stack spacing={3}>
                  <Box 
                    sx={{ 
                      width: 40, height: 4, 
                      bgcolor: activeService.tone, 
                      borderRadius: 2 
                    }} 
                  />
                  <Typography variant="h3" fontWeight="800" sx={{ lineHeight: 1.2 }}>
                    {activeService.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                    {activeService.desc}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ color: activeService.tone, fontWeight: 700, cursor: 'pointer' }}>
                    <Typography>Explore Solution</Typography>
                    <ArrowForward fontSize="small" />
                  </Stack>
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Grid>

          {/* --- RIGHT SIDE: INTERACTIVE CARDS --- */}
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, 
                gap: 2 
              }}
            >
              {services.map((service, index) => (
                <ServiceIconCard
                  key={service.id}
                  active={activeIndex === index}
                  tone={service.tone}
                  onMouseEnter={() => setActiveIndex(index)}
                  whileHover={{ y: -5 }}
                >
                  <Box 
                    sx={{ 
                      fontSize: '2.5rem', 
                      color: activeIndex === index ? service.tone : theme.palette.text.disabled,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="caption" 
                    fontWeight="800" 
                    textAlign="center"
                    sx={{ 
                      textTransform: 'uppercase', 
                      letterSpacing: 1,
                      color: activeIndex === index ? 'text.primary' : 'text.disabled'
                    }}
                  >
                    {service.title.split(' ')[0]}
                  </Typography>
                </ServiceIconCard>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Section>
  );
};