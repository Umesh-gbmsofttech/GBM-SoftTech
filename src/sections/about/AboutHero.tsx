import React from "react";
import { Box, Typography, Button, Stack, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Container } from "@components/ui/Section";

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw", 
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(25),
  
  // Using the requested gradient + corporate background image
  background: `linear-gradient(150deg, ${alpha(theme.palette.primary.main, 0.94)} 0%, ${alpha(theme.palette.secondary.main, 0.88)} 100%), 
               url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",

  // --- THE CONCAVE EFFECT ---
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

// Create a Motion-enabled Stack to handle animations safely
const MotionStack = motion.create(Stack);

export const AboutHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrapper component="section">
        <Container>
          <MotionStack 
            spacing={4} 
            alignItems="center" 
            sx={{ maxWidth: 900, mx: 'auto' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Tagline */}
            <Typography 
              variant="overline" 
              fontWeight="900" 
              sx={{ letterSpacing: 4, color: '#fff', opacity: 0.9 }}
            >
              GBM SOFTTECH IDENTITY
            </Typography>

            {/* Main Heading */}
            <Typography 
              variant="h1" 
              fontWeight="900" 
              sx={{ 
                fontSize: { xs: '3.5rem', md: '5.5rem' }, 
                lineHeight: 1.1, 
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
              }}
            >
              Engineering <br />
              <Box component="span" sx={{ color: alpha('#fff', 0.7) }}>The Future</Box>
            </Typography>

            {/* Subtext */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 400, 
                lineHeight: 1.8, 
                color: alpha('#fff', 0.9),
                maxWidth: 700
              }}
            >
              Specializing in high-concurrency systems and resilient frontend architecture, 
              we empower global brands through logic-driven design and architectural integrity.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ pt: 2 }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  px: 5, py: 2, 
                  borderRadius: 99,
                  backgroundColor: '#fff', 
                  color: theme.palette.primary.main, 
                  fontWeight: '900',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.95),
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Our Story
              </Button>

              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  px: 5, py: 2, 
                  borderRadius: 99,
                  borderColor: '#fff', 
                  color: '#fff', 
                  borderWidth: 2,
                  fontWeight: '900',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: alpha('#fff', 0.1),
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                View Solutions
              </Button>
            </Stack>
          </MotionStack>
        </Container>
      </HeroWrapper>
    </Box>
  );
};