// @ts-nocheck
import React, { useState } from "react";
import { Typography, Box, Stack, Grid, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "@components/ui/Section";
import { ArrowForward } from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const StepButton = styled(Box)(({ active, activeColor }) => ({
  padding: "24px",
  borderRadius: "20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  // Uses your brand color with low opacity for the active background
  background: active ? alpha(activeColor, 0.08) : "transparent",
  border: `1px solid ${active ? alpha(activeColor, 0.15) : "transparent"}`,
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    background: active ? alpha(activeColor, 0.12) : alpha("#94a3b8", 0.05),
  }
}));

// --- BRAND-ALIGNED DATA ---
// Sequence: Green (#00C853) -> Blue (#0052CC) -> Red (#FF3D00) -> Violet (#7C4DFF)

const processSteps = [
  { 
    id: "01", 
    title: "Requirement Analysis", 
    color: "#00C853", // BRAND GREEN
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000", 
    desc: "We dive deep into your business ecosystem to understand goals, user personas, and technical requirements. This foundation ensures we build exactly what you need." 
  },
  { 
    id: "02", 
    title: "Strategy & Planning", 
    color: "#0052CC", // BRAND BLUE
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000", 
    desc: "Our architects map out the system flow, database schemas, and UI/UX journeys. You get a clear roadmap before a single line of code is written." 
  },
  { 
    id: "03", 
    title: "Execution", 
    color: "#FF3D00", // BRAND RED
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000", 
    desc: "We build in iterative sprints, providing regular demos. Our engineering team focuses on clean code, scalability, and high-performance output." 
  },
  { 
    id: "04", 
    title: "Testing & Deployment", 
    color: "#7C4DFF", // BRAND VIOLET
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000", 
    desc: "Rigorous testing across devices ensures a bug-free experience. We perform load testing and security audits to guarantee project integrity." 
  },
];

export const GbmProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  return (
    <Section sx={{ py: 15, bgcolor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 10 }}>
          <Typography 
            variant="overline" 
            sx={{ letterSpacing: 4, fontWeight: 900, color: activeStep.color, transition: '0.4s' }}
          >
            EXECUTION PIPELINE
          </Typography>
          <Typography variant="h2" fontWeight="900" sx={{ color: '#0f172a', mt: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            How We <span style={{ color: activeStep.color, transition: '0.4s' }}>Deliver Success</span>
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="stretch">
          {/* LEFT SIDE: LIST */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              {processSteps.map((step, index) => (
                <StepButton 
                  key={step.id}
                  active={activeIndex === index}
                  activeColor={step.color}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: activeIndex === index ? step.color : "#94a3b8", 
                        fontWeight: 900,
                        transition: '0.3s'
                      }}
                    >
                      {step.id}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: activeIndex === index ? '#0f172a' : '#64748b', 
                        fontWeight: 700, 
                        fontSize: '1.25rem',
                        transition: '0.3s'
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Stack>
                  
                  {activeIndex === index && (
                    <motion.div layoutId="arrow-icon">
                      <ArrowForward sx={{ color: step.color }} />
                    </motion.div>
                  )}
                </StepButton>
              ))}
            </Stack>
          </Grid>

          {/* RIGHT SIDE: ANIMATED PREVIEW */}
          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.02, x: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{ height: '100%' }}
              >
                <Box sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  borderRadius: '40px',
                  overflow: 'hidden',
                  bgcolor: '#ffffff',
                  border: `1px solid ${alpha(activeStep.color, 0.1)}`,
                  boxShadow: `0 40px 80px ${alpha(activeStep.color, 0.12)}`
                }}>
                  {/* Content Panel */}
                  <Box sx={{ p: 5, flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h6" sx={{ color: activeStep.color, fontWeight: 900, mb: 1, opacity: 0.7 }}>
                      PHASE {activeStep.id}
                    </Typography>
                    <Typography variant="h3" fontWeight={900} sx={{ mb: 2, color: '#0f172a', fontSize: '2rem' }}>
                      {activeStep.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748b', lineHeight: 1.8, mb: 4 }}>
                      {activeStep.desc}
                    </Typography>
                    
                    {/* Progress Indicator */}
                    <Stack direction="row" spacing={1}>
                      {processSteps.map((_, i) => (
                        <Box 
                          key={i}
                          sx={{ 
                            height: 6, 
                            width: activeIndex === i ? 40 : 12, 
                            borderRadius: 3,
                            bgcolor: activeIndex === i ? activeStep.color : alpha('#94a3b8', 0.2),
                            transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                          }} 
                        />
                      ))}
                    </Stack>
                  </Box>

                  {/* Image Panel */}
                  <Box sx={{ flex: 0.8, position: 'relative', minHeight: { xs: '250px', sm: 'auto' } }}>
                    {/* Gradient Overlay for seamless blend */}
                    <Box sx={{ 
                      position: 'absolute', inset: 0, zIndex: 1,
                      background: `linear-gradient(to right, #ffffff 0%, transparent 100%)`,
                      display: { xs: 'none', sm: 'block' }
                    }} />
                    
                    <motion.img 
                      src={activeStep.image} 
                      alt={activeStep.title}
                      initial={{ scale: 1.2, filter: 'blur(15px)' }}
                      animate={{ scale: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};