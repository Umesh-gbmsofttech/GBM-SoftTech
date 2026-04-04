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
  ArrowForward,
  SettingsInputComponentOutlined
} from '@mui/icons-material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 'skillmate',
    name: 'Skillmate',
    tagline: 'ED-TECH INFRASTRUCTURE',
    description: 'B2B pipeline engineered to eliminate hiring friction with pre-vetted, high-concurrency engineers.',
    icon: <SchoolOutlined sx={{ fontSize: 26 }} />,
    color: '#3b82f6',
    metrics: ["94% Retention", "Top 2% Vetted"]
  },
  {
    id: 'mygarage',
    name: 'MyGarage',
    tagline: 'AUTOMOTIVE INTELLIGENCE',
    description: 'Intelligence hub for vehicle lifecycle management via real-time telemetry and verified networks.',
    icon: <BuildOutlined sx={{ fontSize: 26 }} />,
    color: '#3b82f6',
    metrics: ["+22% Uptime", "500+ Hubs"]
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      component={motion.div}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      sx={{ height: '100%', perspective: '1000px' }}
    >
      <Box sx={{
        bgcolor: '#fff', 
        borderRadius: '20px',
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${alpha('#000', 0.06)}`,
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': { 
          borderColor: alpha(project.color, 0.4),
          boxShadow: `0 20px 40px ${alpha(project.color, 0.08)}`,
          transform: 'translateY(-4px)'
        }
      }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Box sx={{ 
            p: 1.5, borderRadius: '12px', 
            bgcolor: alpha(project.color, 0.06), 
            color: project.color,
            display: 'flex', 
            border: `1px solid ${alpha(project.color, 0.1)}`
          }}>
            {project.icon}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2 }}>
              {project.name}
            </Typography>
            <Typography variant="caption" sx={{ color: alpha('#000', 0.4), fontWeight: 700, letterSpacing: 1 }}>
              {project.tagline}
            </Typography>
          </Box>
        </Stack>

        <Typography variant="body2" sx={{ color: '#444', mb: 4, lineHeight: 1.7, fontSize: '0.95rem' }}>
          {project.description}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          {project.metrics.map((m) => (
            <Stack key={m} direction="row" alignItems="center" spacing={1} sx={{ bgcolor: '#f8f9fa', px: 1.5, py: 0.5, borderRadius: '8px' }}>
              <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: project.color }} />
              <Typography variant="caption" sx={{ color: '#1a1a1a', fontWeight: 700 }}>{m}</Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: 'auto' }}>
          <Button 
            fullWidth
            endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
            sx={{ 
              py: 1.8, borderRadius: '10px',
              bgcolor: '#1a1a1a',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 700,
              '&:hover': {
                bgcolor: project.color,
                boxShadow: `0 8px 20px ${alpha(project.color, 0.3)}`,
              },
              transition: '0.3s ease'
            }}
          >
            View Case Study
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Projects: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: '#fcfcfc', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1.5 }}>
            <SettingsInputComponentOutlined sx={{ color: '#3b82f6', fontSize: 18 }} />
            <Typography variant="overline" sx={{ fontWeight: 900, color: '#3b82f6', letterSpacing: 3 }}>
              OUR ECOSYSTEMS
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ fontWeight: 950, color: '#000', letterSpacing: '-0.03em', mb: 2 }}>
            Our Projects
          </Typography>
          <Typography variant="body1" sx={{ color: alpha('#000', 0.5), maxWidth: '600px', mx: 'auto' }}>
            Scalable engineering frameworks developed for high-impact industrial solutions.
          </Typography>
        </Box>

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