import React from "react";
import { Box, Typography, Button, Stack, alpha, Container, useTheme } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion"; 
import heroBg from "../../assets/download.jpg"; 

// --- ANIMATIONS ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- STYLED COMPONENTS ---

const HeroWrap = styled(Box)(({ theme }) => ({
  // ✅ CONCAVE BREAKOUT LOGIC
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  
  // Adjusted height and padding to accommodate the curve
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(30), 
  minHeight: "750px",
  
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#001e29",
  color: "#fff",

  // ✅ THE CONCAVE EFFECT
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  width: "100%", // Increased to full width to sit behind the gradient
  height: "100%",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    // Adjusted gradient to match the deep brand look
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
    // Corrected the theme reference (removed quotes)
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "translateY(-3px)",
      boxShadow: `0px 10px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
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

export const Hero = () => {
  const theme = useTheme();

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
                fontSize: { xs: '3rem', md: '5rem' }, 
                fontWeight: 900, 
                lineHeight: 1.1,
                mb: 3,
                textTransform: 'uppercase',
                animation: `${fadeIn} 0.8s ease-out forwards`
              }}
            >
              Engineered for speed <br /> 
              <Box component="span" sx={{ color: alpha("#fff", 0.6) }}>and innovation.</Box>
            </Typography>

            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.3rem' }, 
                color: alpha("#fff", 0.8), 
                mb: 6,
                maxWidth: "600px",
                fontWeight: 400,
                lineHeight: 1.7,
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
    </Box>
  );
};