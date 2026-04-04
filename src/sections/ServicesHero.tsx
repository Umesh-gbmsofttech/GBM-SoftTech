import React from "react";
import { Box, Typography, Button, Stack, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Container } from "@components/ui/Section";
import { MutedText } from "@components/ui/StyledCard";

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  // ✅ THEME: Full-width breakout logic
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw", 
  
  // ✅ THEME: Balanced padding for the concave curve
  paddingTop: theme.spacing(22),
  paddingBottom: theme.spacing(28),
  
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  
  // ✅ THEME: Deep Navy Brand Colors (#001e29) instead of the blue/secondary gradient
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.95)} 0%, ${alpha("#001e29", 0.85)} 100%), 
               url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",

  // ✅ THEME: The Concave (Inner Curve) Effect
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "99px",
  padding: "16px 42px",
  fontWeight: 900,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  
  ...(variant === "contained" && {
    backgroundColor: "#fff", // White background per theme
    color: "#001e29",       // Navy text per theme
    "&:hover": {
      backgroundColor: alpha("#fff", 0.9),
      transform: "translateY(-3px)",
      boxShadow: `0px 15px 30px ${alpha("#000", 0.3)}`,
    },
  }),
  
  ...(variant === "outlined" && {
    borderColor: "#fff",
    color: "#fff",
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px",
      borderColor: "#fff",
      backgroundColor: alpha("#fff", 0.1),
      transform: "translateY(-3px)",
    },
  }),
}));

// Safe Motion Component
const MotionStack = motion.create ? motion.create(Stack) : motion(Stack);

// --- MAIN COMPONENT ---

export const ServicesHero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrapper component="section">
        <Container>
          <MotionStack 
            spacing={4} 
            alignItems="center" 
            sx={{ maxWidth: 850, mx: 'auto' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Tagline */}
            <Typography 
              variant="overline" 
              fontWeight="900" 
              sx={{ letterSpacing: 3, color: alpha('#fff', 0.8) }}
            >
              AREAS WHAT WE SERVE
            </Typography>

            {/* Heading */}
            <Typography 
              variant="h1" 
              fontWeight="900" 
              sx={{ 
                fontSize: { xs: '3rem', md: '5rem' }, 
                lineHeight: 1.1, 
                color: '#fff',
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              IT Solutions for <br />
              <Box component="span" sx={{ color: alpha('#fff', 0.6) }}>Your Business</Box>
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
              Since our establishment, we have been delivering high-quality and sustainable 
              software solutions for corporate business purposes across the globe.
            </Typography>

            {/* Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ pt: 2 }}>
              <ActionButton variant="contained">
                Learn More
              </ActionButton>

              <ActionButton variant="outlined">
                Get in Touch
              </ActionButton>
            </Stack>
          </MotionStack>
        </Container>
      </HeroWrapper>
    </Box>
  );
};  