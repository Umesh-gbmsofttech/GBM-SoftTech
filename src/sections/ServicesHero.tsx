import React from "react";
import { Box, Typography, Button, Stack, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Container } from "@mui/material"; // Standard MUI Container or your custom UI component

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw", 
  paddingTop: theme.spacing(22),
  paddingBottom: theme.spacing(28),
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  // Brand Deep Navy with Overlay
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.95)} 0%, ${alpha("#001e29", 0.85)} 100%), 
               url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  textAlign: "center",
  color: "#fff",
  // The Signature Concave Effect
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "99px",
  padding: "16px 42px",
  fontWeight: 900,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all(0.3s cubic-bezier(0.4, 0, 0.2, 1))",
  
  ...(variant === "contained" && {
    backgroundColor: "#fff", 
    color: "#001e29",
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

const MotionStack = motion.create ? motion.create(Stack) : motion(Stack);

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

            {/* Added: Supporting Description */}
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.2rem", 
                color: alpha("#fff", 0.7), 
                maxWidth: 600, 
                lineHeight: 1.6 
              }}
            >
              Empowering your digital journey with scalable engineering, 
              UI/UX precision, and enterprise-grade infrastructure.
            </Typography>

        
            
          </MotionStack>
        </Container>
      </HeroWrapper>
    </Box>
  );
};