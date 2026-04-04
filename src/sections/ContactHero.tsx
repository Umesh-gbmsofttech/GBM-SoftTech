import React, { useState, useEffect } from "react";
import { Box, Typography, alpha, Stack, useTheme, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@components/ui/Section";

// --- Data ---
const benefits = [
  { text: "Launch Faster", color: "#fff" },
  { text: "Scale Smoother", color: "#fff" },
  { text: "Innovate Smarter", color: "#fff" }
];

// --- Styled Components ---

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
  
  // ✅ THEME: Deep Navy Brand Colors (#001e29)
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.95)} 0%, ${alpha("#001e29", 0.85)} 100%), 
               url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
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

// --- Main Component ---

export const ContactHero = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  // SuccessFlip Loop Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrapper component="section">
        <Container sx={{ position: "relative", zIndex: 10 }}>
          <Stack spacing={4} alignItems="center" sx={{ maxWidth: 850, mx: 'auto' }}>
            
            <Typography 
              variant="overline" 
              fontWeight="900" 
              sx={{ letterSpacing: 3, color: alpha('#fff', 0.8) }}
            >
              GBM SOFTTECH HELPS YOU
            </Typography>

            {/* Animated SuccessFlip Loop */}
            <Box sx={{ height: { xs: "70px", md: "110px" }, overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={benefits[index].text}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 900,
                      fontSize: { xs: '2.5rem', md: '5rem' },
                      color: '#fff',
                      lineHeight: 1,
                      textTransform: 'uppercase',
                      textShadow: '0 4px 12px rgba(0,0,0,0.25)' 
                    }}
                  >
                    {benefits[index].text}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>

            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 900, 
                color: alpha('#fff', 0.65), 
                mt: -1, 
                textTransform: 'uppercase' 
              }}
            >
              For Your Business
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 700, 
                mx: "auto", 
                color: alpha('#fff', 0.9), 
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.8,
                fontWeight: 400
              }}
            >
              Since our establishment, we have been delivering high-quality and sustainable 
              software solutions tailored for corporate growth and digital excellence.
            </Typography>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ pt: 2 }}>
              <ActionButton variant="contained">
                Learn More
              </ActionButton>

              <ActionButton variant="outlined">
                Get in Touch
              </ActionButton>
            </Stack>

          </Stack>
        </Container>
      </HeroWrapper>
    </Box>
  );
};