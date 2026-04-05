import React from "react";
import { Box, Typography, Button, Stack, alpha, Container, useTheme } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion"; 
import heroBg from "../../assets/download.jpg"; 

// --- ANIMATIONS ---

// Entry fade-in for typography
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Subtle breathing pulse to draw the eye
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 157, 255, 0.4); transform: scale(1); }
  70% { box-shadow: 0 0 0 15px rgba(0, 157, 255, 0); transform: scale(1.02); }
  100% { box-shadow: 0 0 0 0 rgba(0, 157, 255, 0); transform: scale(1); }
`;

// High-velocity light streak
const shimmerAnimation = keyframes`
  0% { transform: translateX(-150%) skewX(-30deg); }
  50% { transform: translateX(150%) skewX(-30deg); }
  100% { transform: translateX(150%) skewX(-30deg); }
`;

// --- STYLED COMPONENTS ---

const HeroWrap = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(25), 
  minHeight: "750px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#001e29",
  color: "#fff",
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  width: "100%", 
  height: "100%",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(150deg, #001e29 20%, rgba(0, 30, 41, 0.7) 60%, transparent 100%)",
    zIndex: 2,
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center right",
  }
});

const PillButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "50px",
  padding: "16px 42px",
  fontWeight: 800,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  ...(variant === "contained" && {
    backgroundColor: "#024aa8",
    color: "#fff",
    // Base attention-grabber animation
    animation: `${pulse} 2s infinite cubic-bezier(0.4, 0, 0.6, 1)`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "translateY(-3px)",
      boxShadow: `0px 10px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
      animation: 'none', // Stop pulsing on hover for stability
    },
  }),
  ...(variant === "outlined" && {
    backgroundColor: "#fff",
    color: "#001e29",
    border: "none",
    "&:hover": {
      backgroundColor: alpha("#fff", 0.9),
      transform: "translateY(-3px)",
    },
  }),
}));

const MotionDiv = motion.create ? motion.create("div") : motion.div;

// Combined attention wrapper: Stays attractive while moving
const AttentionWrap = styled(MotionDiv)({
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  borderRadius: '50px',
  "&::after": {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
    transform: 'translateX(-150%) skewX(-30deg)',
    animation: `${shimmerAnimation} 3.5s infinite ease-in-out`,
    zIndex: 3,
  }
});

export const Hero = () => {
  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrap>
        <BackgroundImage>
          <img src={heroBg} alt="Corporate Innovation" />
        </BackgroundImage>

        <Container sx={{ position: "relative", zIndex: 10 }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "750px" }, textAlign: { xs: 'center', md: 'left' } }}>
            
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.8rem', md: '4.2rem' }, 
                fontWeight: 800, 
                lineHeight: 1.1,
                mb: 3,
                animation: `${fadeIn} 0.8s ease-out forwards`
              }}
            >
              Engineered for speed <br /> 
              <Box component="span" sx={{ color: alpha("#fff", 0.6) }}>and innovation.</Box>
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' }, 
                color: alpha("#fff", 0.7), 
                mb: 6,
                maxWidth: "580px",
                fontWeight: 400,
                lineHeight: 1.1,
                animation: `${fadeIn} 1s ease-out forwards`,
                mx: { xs: 'auto', md: 0 }
              }}
            >
              We help enterprises and high-growth startups modernize with 
              confidence through high-performance web solutions.
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={3} 
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              {/* This wrapper provides the shimmer streak */}
              <AttentionWrap 
                whileHover={{ y: -4 }} 
                whileTap={{ scale: 0.97 }}
              >
                <PillButton variant="contained">Get Started</PillButton>
              </AttentionWrap>

              <MotionDiv whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
                <PillButton variant="outlined">Talk to Our Experts</PillButton>
              </MotionDiv>
            </Stack>
          </Box>
        </Container>
      </HeroWrap>
    </Box>
  );
};