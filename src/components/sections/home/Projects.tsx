import React, { useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Stack, 
  alpha, 
  Button,
} from '@mui/material';
import { 
  SchoolOutlined, 
  BuildOutlined, 
  CodeOutlined,
  Bolt,
  ArrowForward
} from '@mui/icons-material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 'skillmate',
    name: 'Skillmate',
    tagline: 'ED-TECH INFRASTRUCTURE',
    title: 'Architecting Future Talent.',
    description: 'High-performance B2B pipeline engineered to eliminate hiring friction with pre-vetted, high-concurrency engineers.',
    icon: <SchoolOutlined />,
    color: '#3b82f6',
    metrics: ["94% Retention", "Top 2% Vetted", "SME Optimized"]
  },
  {
    id: 'mygarage',
    name: 'MyGarage',
    tagline: 'AUTOMOTIVE INTELLIGENCE',
    title: 'Data-Driven Fleet Control.',
    description: 'Enterprise intelligence hub for vehicle lifecycle management via real-time telemetry and verified networks.',
    icon: <BuildOutlined />,
    color: '#f57c00',
    metrics: ["+22% Uptime", "500+ Hubs", "Live Telemetry"]
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      component={motion.div}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      sx={{ position: 'relative', height: '100%', perspective: '1000px' }}
    >
      <Box sx={{
        position: 'relative',
        bgcolor: '#0A0C10',
        borderRadius: '32px',
        p: 5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${alpha('#fff', 0.08)}`,
        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        '&:hover': { borderColor: alpha(project.color, 0.4) }
      }}>
        
        {/* Animated Gradient Background Shimmer */}
        <Box sx={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at center, ${alpha(project.color, 0.03)} 0%, transparent 70%)`,
          zIndex: 0
        }} />

        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 6, zIndex: 1 }}>
          <Box sx={{ 
            width: 56, height: 56, borderRadius: '16px', 
            bgcolor: alpha(project.color, 0.1), color: project.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 20px ${alpha(project.color, 0.2)}`,
            border: `1px solid ${alpha(project.color, 0.3)}`
          }}>
            {project.icon}
          </Box>
          <Typography variant="overline" sx={{ color: alpha('#fff', 0.4), fontWeight: 900, letterSpacing: 2 }}>
            {project.tagline}
          </Typography>
        </Stack>

        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#fff', mb: 2, fontSize: '2rem', letterSpacing: '-0.02em' }}>
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ color: alpha('#fff', 0.5), mb: 4, lineHeight: 1.7, maxWidth: '90%' }}>
            {project.description}
          </Typography>
        </Box>

        {/* Technical Specification Chips */}
        <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 6, zIndex: 1 }}>
          {project.metrics.map((m) => (
            <Box key={m} sx={{ 
              px: 2, py: 0.7, borderRadius: '12px', 
              bgcolor: alpha('#fff', 0.02), border: `1px solid ${alpha('#fff', 0.05)}`,
              display: 'flex', alignItems: 'center', gap: 1
            }}>
              <Bolt sx={{ fontSize: 14, color: project.color }} />
              <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, textTransform: 'uppercase' }}>{m}</Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', zIndex: 1 }}>
          <Button 
            fullWidth
            endIcon={<ArrowForward />}
            sx={{ 
              py: 2.5, borderRadius: '16px',
              bgcolor: alpha(project.color, 1),
              color: '#fff',
              textTransform: 'none',
              fontWeight: 900,
              fontSize: '1rem',
              boxShadow: `0 15px 30px ${alpha(project.color, 0.3)}`,
              '&:hover': {
                bgcolor: project.color,
                transform: 'translateY(-2px)',
                boxShadow: `0 20px 40px ${alpha(project.color, 0.4)}`,
              },
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            Launch System
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Projects: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 15, bgcolor: '#05070A', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Architectural Noise */}
      <Box sx={{ 
        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={10} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ p: 1, borderRadius: '8px', bgcolor: alpha('#3b82f6', 0.1), color: '#3b82f6', display: 'flex' }}>
                  <CodeOutlined fontSize="small" />
                </Box>
                <Typography variant="overline" sx={{ fontWeight: 900, color: '#3b82f6', letterSpacing: 4 }}>
                  ENGINEERING VENTURES
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 900, color: '#fff', fontSize: { xs: '3rem', md: '4.5rem' }, letterSpacing: '-0.05em', lineHeight: 1 }}>
                High-Performance <br />
                <Box component="span" sx={{ color: alpha('#fff', 0.15) }}>Scalable Stacks.</Box>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ color: alpha('#fff', 0.4), fontSize: '1.2rem', lineHeight: 1.8, borderLeft: `2px solid ${alpha('#fff', 0.1)}`, pl: 4 }}>
              We don't just build websites; we engineer proprietary business ecosystems designed for massive scale and operational integrity.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {projects.map((p) => (
            <Grid item xs={12} md={6} key={p.id}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};