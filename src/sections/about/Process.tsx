import React, { useRef } from 'react';
import { 
  Box, 
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
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

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
    <Box 
      ref={containerRef}
      sx={{ 
        bgcolor: '#fbfbfb', 
        py: { xs: 10, md: 15 }, 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* 1. ANIMATED FLOW PATH (Desktop Only) */}
      {!isMobile && (
        <Box sx={{ position: 'absolute', top: '55%', left: 0, width: '100%', zIndex: 0, opacity: 0.4 }}>
          <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none">
            <motion.path
              d="M0 50 C 150 50, 300 10, 450 50 C 600 90, 750 50, 900 10 C 1050 50, 1200 50, 1350 50"
              stroke="#eb8b25"
              strokeWidth="2"
              strokeDasharray="10 10"
              style={{ pathLength }}
            />
          </svg>
        </Box>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 12 }}>
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
              Our Execution <Box component="span" sx={{ color: '#25a2eb' }}>Process</Box>
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} md={index === 4 ? 12 : 6} lg={2.4} key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    cursor: 'default',
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      bgcolor: '#ffffff',
                      boxShadow: '0 30px 60px -15px rgba(37, 99, 235, 0.15)',
                      borderColor: alpha('#2577eb', 0.2),
                      '& .step-badge': { bgcolor: '#2574eb', color: '#fff', transform: 'rotate(360deg)' },
                      '& .icon-blob': { transform: 'scale(1.2)', bgcolor: alpha('#2574eb', 0.15) }
                    }
                  }}
                >
                  <Stack spacing={3}>
                    {/* ICON AREA */}
                    <Box sx={{ position: 'relative', width: 70, height: 70 }}>
                      <Box
                        className="icon-blob"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          bgcolor: alpha('#257eeb', 0.08),
                          borderRadius: '24px',
                          transition: '0.4s ease',
                        }}
                      />
                      <Box sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2574eb', '& svg': { fontSize: 35 } }}>
                        {step.icon}
                      </Box>
                      
                      {/* STEP BADGE */}
                      <Box
                        className="step-badge"
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: -10,
                          width: 32,
                          height: 32,
                          bgcolor: '#f1f5f9',
                          color: 'theme.palette.primary.main',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          transition: '0.6s ease',
                          border: '2px solid #fff',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}
                      >
                        {step.id}
                      </Box>
                    </Box>

                    {/* CONTENT AREA */}
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 900, color: '#001e29', mb: 1, lineHeight: 1.2 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.8, fontWeight: 500 }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};