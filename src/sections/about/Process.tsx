// @ts-nocheck
import React, { useRef } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Stack, 
  alpha,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { 
  SearchOutlined as AnalysisIcon,
  MapOutlined as StrategyIcon,
  CodeOutlined as ExecutionIcon,
  FactCheckOutlined as TestingIcon,
  TuneOutlined as SupportIcon 
} from '@mui/icons-material';
import { motion, useScroll, useSpring } from 'framer-motion';

const processSteps = [
  { id: '01', title: 'Requirement Analysis', desc: 'Deep dive into your business goals to understand core requirements.', icon: <AnalysisIcon /> },
  { id: '02', title: 'Strategy & Planning', desc: 'Creating a technical roadmap and architectural blueprint.', icon: <StrategyIcon /> },
  { id: '03', title: 'Execution', desc: 'Agile development and rapid delivery using modern tech stacks.', icon: <ExecutionIcon /> },
  { id: '04', title: 'Testing & Deployment', desc: 'Rigorous QA followed by a seamless production launch.', icon: <TestingIcon /> },
  { id: '05', title: 'Support & Optimization', desc: 'Post-launch monitoring and continuous enhancements.', icon: <SupportIcon /> },
];

export const Process: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);

  // Scroll-based path animation logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });
  
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: "#fbfbfb",
        paddingTop: "80px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. ANIMATED FLOW PATH (Desktop Only) */}
      {!isMobile && (
        <div style={{ position: "absolute", top: "55%", left: 0, width: "100%", zIndex: 0, opacity: 0.4 }}>
          <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none">
            <motion.path
              d="M0 50 C 150 50, 300 10, 450 50 C 600 90, 750 50, 900 10 C 1050 50, 1200 50, 1350 50"
              stroke="#eb8b25"
              strokeWidth="2"
              strokeDasharray="10 10"
              style={{ pathLength }}
            />
          </svg>
        </div>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "96px" }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ color: '#0c2d76', fontWeight: 800, letterSpacing: 4, display: 'block', mb: 1 }}>
              THE GBM WAY
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: '#001e29', letterSpacing: '-0.02em', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Our Execution <span style={{ color: '#25a2eb' }}>Process</span>
            </Typography>
          </motion.div>
        </div>

        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} md={index === 4 ? 12 : 6} lg={2.4} key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              >
                <div
                  style={{
                    padding: "32px",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
                    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative",
                    cursor: "default",
                  }}
                >
                  <Stack spacing={3}>
                    {/* ICON AREA */}
                    <div style={{ position: "relative", width: "70px", height: "70px" }}>
                      <div
                        className="icon-blob"
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: alpha('#257eeb', 0.08),
                          borderRadius: "24px",
                          transition: "0.4s ease",
                        }}
                      />
                      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#2574eb" }}>
                        {step.icon}
                      </div>
                      
                      {/* STEP BADGE */}
                      <div
                        className="step-badge"
                        style={{
                          position: "absolute",
                          top: "-10px",
                          right: "-10px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "#f1f5f9",
                          color: "#2574eb",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          transition: "0.6s ease",
                          border: "2px solid #fff",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        }}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* CONTENT AREA */}
                    <div>
                      <Typography variant="h6" sx={{ fontWeight: 900, color: '#001e29', mb: 1, lineHeight: 1.2 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.8, fontWeight: 500 }}>
                        {step.desc}
                      </Typography>
                    </div>
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
