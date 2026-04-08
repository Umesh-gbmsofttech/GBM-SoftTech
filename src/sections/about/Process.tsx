// @ts-nocheck
import React, { useState } from "react";
import { Container, Grid, Typography, Stack, alpha, useTheme, useMediaQuery, Box } from "@mui/material";
import {
  SearchOutlined as AnalysisIcon,
  MapOutlined as StrategyIcon,
  CodeOutlined as ExecutionIcon,
  FactCheckOutlined as TestingIcon,
  TuneOutlined as SupportIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const processSteps = [
  { id: "01", title: "Requirement Analysis", desc: "Deep dive into your business goals.", icon: <AnalysisIcon /> },
  { id: "02", title: "Strategy & Planning", desc: "Creating a technical roadmap.", icon: <StrategyIcon /> },
  { id: "03", title: "Execution", desc: "Agile development and rapid delivery.", icon: <ExecutionIcon /> },
  { id: "04", title: "Testing & Deployment", desc: "Rigorous QA and production launch.", icon: <TestingIcon /> },
  { id: "05", title: "Support & Optimization", desc: "Post-launch monitoring.", icon: <SupportIcon /> },
];

export const Process: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  // Track which step is being hovered to animate the line
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div
      style={{
        backgroundColor: "#fbfbfb",
        paddingTop: "80px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Path reacting to hover */}
      {!isMobile && (
        <div style={{ position: "absolute", top: "55%", left: 0, width: "100%", zIndex: 0, opacity: 0.4 }}>
          <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none">
            <motion.path
              d="M0 50 C 150 50, 300 10, 450 50 C 600 90, 750 50, 900 10 C 1050 50, 1200 50, 1350 50"
              stroke="#024aa8"
              strokeWidth="3"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              // Animates the line forward based on hover index (0.2 per step)
              animate={{ pathLength: hoveredIndex === -1 ? 0 : (hoveredIndex + 1) * 0.2 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </svg>
        </div>
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", marginBottom: "96px" }}>
          <Typography variant="overline" sx={{ color: "#0c2d76", fontWeight: 800, letterSpacing: 4 }}>
            THE GBM WAY
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#001e29" }}>
            Our Execution <span style={{ color: "#25a2eb" }}>Process</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} md={index === 4 ? 12 : 6} lg={2.4} key={step.id}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <div
                  style={{
                    padding: "32px",
                    height: "100%",
                    backgroundColor: hoveredIndex === index ? "#fff" : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "32px",
                    border: hoveredIndex === index ? `1px solid #257eeb` : "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: hoveredIndex === index ? "0 20px 40px rgba(0,0,0,0.1)" : "0 10px 30px -10px rgba(0,0,0,0.05)",
                    transition: "all 0.4s ease",
                    position: "relative",
                  }}
                >
                  <Stack spacing={3}>
                    <div style={{ position: "relative", width: "70px", height: "70px" }}>
                      <motion.div
                        animate={{ 
                          scale: hoveredIndex === index ? 1.2 : 1,
                          backgroundColor: hoveredIndex === index ? alpha("#257eeb", 0.15) : alpha("#257eeb", 0.08)
                        }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "24px",
                        }}
                      />
                      <Box sx={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#2574eb" }}>
                        {step.icon}
                      </Box>
                    </div>

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 900, color: "#001e29", mb: 1 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.6 }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};