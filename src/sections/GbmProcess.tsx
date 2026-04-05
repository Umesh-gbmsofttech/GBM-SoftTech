// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Stack, Container, alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Grid } from "@mui/material";

// --- DATA ---
const processSteps = [
  { 
    id: 0, 
    title: "Requirement Analysis", 
    color: "#FF4D4D", // Red
    label: "01",
    desc: "We dive deep into your business ecosystem to understand goals, user personas, and technical requirements. This foundation ensures we build exactly what you need." 
  },
  { 
    id: 1, 
    title: "Strategy & Plamming", 
    color: "#4CAF50", // Green
    label: "02",
    desc: "Our architects map out the system flow, database schemas, and UI/UX journeys. You get a clear roadmap before a single line of code is written." 
  },
  { 
    id: 2, 
    title: "Execution", 
    color: "#2196F3", // Blue
    label: "03",
    desc: "We build in iterative sprints, providing regular demos. Our engineering team focuses on clean code, scalability, and high-performance output." 
  },
  { 
    id: 3, 
    title: "Testing & Deployment", 
    color: "#FF4D4D", // Red (Repeat Sequence)
    label: "04",
    desc: "Rigorous testing across devices ensures a bug-free experience. We perform load testing and security audits to guarantee project integrity." 
  },
];

// --- STYLED COMPONENTS ---

const StepCircle = styled(motion.div)<{ bordercolor: string; active: boolean }>(({ bordercolor, active }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: active ? bordercolor : "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `3px solid ${bordercolor}`,
  color: active ? "#fff" : bordercolor,
  cursor: "pointer",
  zIndex: 2,
  fontWeight: 900,
  fontSize: "1.2rem",
  transition: "background-color 0.3s ease, color 0.3s ease",
}));

const VerticalLine = styled(Box)({
  position: "absolute",
  left: "40px",
  top: 0,
  bottom: 0,
  width: "2px",
  borderLeft: "2px dashed #ddd",
  zIndex: 1,
});

export const GbmProcess = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", backgroundColor: "#f8fafc" }}>
      <Container maxWidth="md">
        <Stack spacing={2} sx={{ mb: 10 }}>
          <Typography variant="overline" color="primary" fontWeight="900" sx={{ letterSpacing: 4 }}>
            EXECUTION PIPELINE
          </Typography>
          <Typography variant="h3" fontWeight="900">
            How We <span style={{ color: theme.palette.primary.main }}>Deliver Success</span>
          </Typography>
        </Stack>

        <Grid container spacing={6} alignItems="center">
          {/* --- LEFT SIDE: VERTICAL STEPS --- */}
          <Grid item xs={12} md={4}>
            <div style={{ position: "relative", paddingTop: "16px", paddingBottom: "16px" }}>
              <VerticalLine />
              <Stack spacing={6}>
                {processSteps.map((step) => (
                  <Stack 
                    key={step.id} 
                    direction="row" 
                    alignItems="center" 
                    spacing={3}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onTouchStart={() => setActiveStep(step.id)}
                  >
                    <StepCircle 
                      bordercolor={step.color} 
                      active={activeStep === step.id}
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: activeStep === step.id ? `0 0 20px ${alpha(step.color, 0.4)}` : "none" 
                      }}
                    >
                      {step.label}
                    </StepCircle>
                    
                    <Typography 
                      variant="h6" 
                      fontWeight="900" 
                      sx={{ 
                        color: activeStep === step.id ? step.color : "text.disabled",
                        transition: "0.3s ease",
                        cursor: "pointer"
                      }}
                    >
                      {step.title.split(' ')[0]}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </div>
          </Grid>

          {/* --- RIGHT SIDE: INFORMATION PANEL --- */}
          <Grid item xs={12} md={8}>
            <div style={{
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              padding: "16px 48px",
              borderRadius: "32px",
              backgroundColor: "#fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Stack spacing={3}>
                    <Typography 
                      variant="h4" 
                      fontWeight="900" 
                      sx={{ color: processSteps[activeStep].color }}
                    >
                      {processSteps[activeStep].title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ color: "text.secondary", lineHeight: 1.9, fontSize: "1.1rem" }}
                    >
                      {processSteps[activeStep].desc}
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: processSteps[activeStep].color }} />
                      <Typography variant="button" fontWeight="900" color="text.primary">
                        GBM Workflow Standard
                      </Typography>
                    </Stack>
                  </Stack>
                </motion.div>
              </AnimatePresence>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

