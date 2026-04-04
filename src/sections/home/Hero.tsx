import React from "react";
import { Box, Typography, Button, Stack, alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion"; 
import { Container } from "@components/ui/Section";
import heroBg from "../../assets/download.jpg"; 

// --- STYLED COMPONENTS ---

const HeroWrap = styled(Box)(({ theme }) => ({
  // ✅ SERVICES THEME: Full-width breakout logic
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw", 
  
  // ✅ SERVICES THEME: Balanced padding for the curve
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(30),
  
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  
  // ✅ SERVICES THEME: High-intensity brand gradient overlay
  background: `linear-gradient(150deg, ${alpha(theme.palette.primary.main, 0.94)} 0%, ${alpha(theme.palette.secondary.main, 0.88)} 100%), 
               url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",

  // ✅ SERVICES THEME: The Concave Inner Curve Effect
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "99px", // Pill shape from Services
  padding: "16px 42px",
  fontWeight: 900,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  
  ...(variant === "contained" && {
    backgroundColor: "#fff", // Services style: White background
    color: "#001e29",       // Services style: Dark blue text
    "&:hover": {
      backgroundColor: alpha("#fff", 0.9),
      transform: "translateY(-3px)",
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

// Safe Framer Motion integration
const MotionStack = motion.create ? motion.create(Stack) : motion(Stack);

export const Hero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrap component="section">
        <Container>
          <MotionStack 
            spacing={4} 
            alignItems="center" 
            sx={{ maxWidth: 900, mx: 'auto' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline - Services Style */}
            <Typography 
              variant="overline" 
              fontWeight="700" 
              sx={{ letterSpacing: 2, color: '#fff', opacity: 0.9 }}
            >
              INNOVATING THE DIGITAL FRONTIER
            </Typography>

            {/* Main Heading - Services Style */}
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '5rem' }, 
                fontWeight: 900, 
                lineHeight: 1.1,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}
            >
              Engineered for speed <br /> 
              <Box component="span" sx={{ color: alpha("#fff", 0.7) }}>
                and innovation.
              </Box>
            </Typography>

            {/* Subtext - Services Style (Muted text replacement) */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.3rem' }, 
                color: alpha("#fff", 0.9), 
                maxWidth: "700px",
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              We deliver high-quality and sustainable software solutions 
              to help enterprises and high-growth startups modernize with confidence.
            </Typography>

            {/* Buttons - Services Style Stack */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 3 }}>
              <ActionButton variant="contained">
                Get Started
              </ActionButton>

              <ActionButton variant="outlined">
                Talk to Our Experts
              </ActionButton>
            </Stack>
          </MotionStack>
        </Container>
      </HeroWrap>
    </Box>
  );
};