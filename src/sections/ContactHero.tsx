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
  // EXACT ORIGINAL STYLING RESTORED
  width: "100.5%",
  margin: -40,
  padding: 0,
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(35),
  
  background: `linear-gradient(150deg, ${alpha(theme.palette.primary.main, 0.92)} 0%, ${alpha(theme.palette.secondary.main, 0.88)} 100%), 
               url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  clipPath: "ellipse(150% 100% at 50% 0%)",
  overflow: "hidden",
}));

// --- Main Component ---

export const ContactHero = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  // SuccessFlip Loop Logic (Starts immediately as video is removed)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroWrapper>
      <Container sx={{ position: "relative", zIndex: 10 }}>
        <Stack spacing={4} alignItems="center" sx={{ maxWidth: 850, mx: 'auto' }}>
          
          <Typography 
            variant="overline" 
            fontWeight="700" 
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
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    color: '#fff',
                    lineHeight: 1,
                    textShadow: '0 4px 12px rgba(0,0,0,0.25)' 
                  }}
                >
                  {benefits[index].text}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', mt: -1 }}>
            For Your Business
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 700, 
              mx: "auto", 
              color: alpha('#fff', 0.9), 
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6 
            }}
          >
            Since our establishment, we have been delivering high-quality and sustainable 
            software solutions tailored for corporate growth and digital excellence.
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                px: 5, py: 1.8, 
                borderRadius: 99,
                backgroundColor: '#fff', 
                color: theme.palette.primary.main,
                fontWeight: '900',
                '&:hover': {
                  backgroundColor: alpha('#fff', 0.9),
                }
              }}
            >
              Learn More
            </Button>

            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                px: 5, py: 1.8, 
                borderRadius: 99,
                borderColor: '#fff',
                color: '#fff',
                borderWidth: 2,
                fontWeight: '900',
                '&:hover': {
                  borderColor: '#fff',
                  backgroundColor: alpha('#fff', 0.1),
                  borderWidth: 2,
                }
              }}
            >
              Get in Touch
            </Button>
          </Stack>

        </Stack>
      </Container>
    </HeroWrapper>
  );
};