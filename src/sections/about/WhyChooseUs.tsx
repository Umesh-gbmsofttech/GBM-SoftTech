import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, alpha } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import AboutImg from '../../assets/About.jpg'; 

// --- STABLE MOTION COMPONENTS (Defined outside to prevent re-creation) ---
const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { value: '20.5k', label: 'Projects Successfully Implemented' },
    { value: '450+', label: 'Happy Global Clients' },
    { value: '12.5k', label: 'Engineers on Team' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 20 }, 
        bgcolor: '#FFFFFF', 
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* 1. LEFT COLUMN */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Stack spacing={0}>
                {stats.map((stat, index) => (
                  <MotionBox 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ x: 10 }} 
                    sx={{ 
                      py: 5, 
                      borderBottom: index !== stats.length - 1 ? '1px solid #F0F0F0' : 'none',
                      cursor: 'default'
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#001e29', mb: 1, fontSize: '2.8rem', lineHeight: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha('#001e29', 0.5), fontWeight: 600, letterSpacing: 0.5 }}>
                      {stat.label}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* 2. CENTER COLUMN */}
          <Grid item xs={12} md={5}>
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              whileHover={{ y: -10 }}
              sx={{ 
                position: 'relative', 
                borderRadius: '32px', 
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(0,30,41,0.12)',
                perspective: '1000px'
              }}
            >
              <Box 
                component="img"
                src={AboutImg} 
                alt="GBM SoftTech Excellence"
                sx={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  filter: 'grayscale(10%) contrast(1.05)',
                  transition: 'filter 0.4s ease',
                  '&:hover': { filter: 'grayscale(0%) contrast(1.1)' }
                }}
              />
            </MotionBox>
          </Grid>

          {/* 3. RIGHT COLUMN */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack spacing={4}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <MotionBox 
                    initial={{ width: 0 }}
                    whileInView={{ width: 14 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    sx={{ height: 2, bgcolor: '#1457e7' }} 
                  />
                  <Typography variant="overline" sx={{ fontWeight: 900, color: '#1457e7', letterSpacing: 4 }}>
                    ABOUT COMPANY
                  </Typography>
                </Stack>

                <Typography variant="h2" sx={{ fontWeight: 900, color: '#001e29', lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '3.8rem' }, letterSpacing: '-0.03em' }}>
                  Creative agency & their best solutions
                </Typography>

                <Typography sx={{ color: alpha('#001e29', 0.6), lineHeight: 1.9, fontSize: '1.05rem', fontWeight: 400 }}>
                  GBM SoftTech specializes in high-concurrency systems and resilient frontend architecture.
                </Typography>

                <Box sx={{ pt: 2 }}>
                  <MotionButton 
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(41, 93, 215, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained" 
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      bgcolor: '#1457e7', 
                      borderRadius: '50px', 
                      px: 5, py: 2,
                      textTransform: 'none',
                      fontWeight: 800,
                      color: '#ffffff',
                      boxShadow: '0 15px 30px rgba(41, 93, 215, 0.25)',
                      '&:hover': { bgcolor: '#1457e7' }
                    }}
                  >
                    Read More
                  </MotionButton>
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};