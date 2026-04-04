import React from "react";
import { Box, Typography, Button, Stack, alpha, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion"; 

// 1. FIX THE ERROR: Ensure this import path is correct for your project
// If your image is named differently, change "download.jpg" to your actual filename
import heroBg from "../../assets/download.jpg"; 

// --- ANIMATIONS ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- STYLED COMPONENTS ---

const HeroWrap = styled(Box)({
  position: "relative",
  height: "92vh",
  minHeight: "750px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#001e29",
  color: "#fff",
});

const BackgroundImage = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  width: "60%",
  height: "100%",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, #001e29 5%, rgba(0, 30, 41, 0.7) 40%, transparent 100%)",
    zIndex: 2,
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center right",
  }
});

const PillButton = styled(Button)(({ variant }) => ({
  borderRadius: "50px",
  padding: "14px 38px",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "1.05rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  ...(variant === "contained" && {
    backgroundColor: " theme.palette.primary.main",
    color: "#fff",
    "&:hover": {
      backgroundColor: "theme.palette.primary.main",
      boxShadow: "0px 10px 25px rgba(176, 222, 50, 0.35)",
    },
  }),
  ...(variant === "outlined" && {
    backgroundColor: "#fff",
    color: "#001e29",
    border: "none",
    "&:hover": {
      backgroundColor: alpha("#fff", 0.9),
    },
  }),
}));

// 2. RESOLVE WARNING: Use motion.create if your version of Framer Motion requires it
const MotionDiv = motion.create ? motion.create("div") : motion.div;

export const Hero = () => {
  return (
    <HeroWrap>
      <BackgroundImage>
        {/* This is where heroBg is used */}
        <img src={heroBg} alt="Corporate Innovation" />
      </BackgroundImage>

      <Container sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ maxWidth: { xs: "100%", md: "700px" } }}>
          
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
            <Box component="span" sx={{ color: alpha("#fff", 0.9) }}>and innovation.</Box>
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.25rem' }, 
              color: alpha("#fff", 0.7), 
              mb: 6,
              maxWidth: "580px",
              animation: `${fadeIn} 1s ease-out forwards`
            }}
          >
            We help enterprises and high-growth startups modernize with 
            confidence through high-performance web solutions.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <MotionDiv whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <PillButton variant="contained">Get Started</PillButton>
            </MotionDiv>

            <MotionDiv whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <PillButton variant="outlined">Talk to Our Experts</PillButton>
            </MotionDiv>
          </Stack>
        </Box>
      </Container>
    </HeroWrap>
  );
};