// @ts-nocheck
import { useState } from "react";
import { Box, Typography, alpha, Stack, useTheme, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@components/ui/Section";
import servicesVideo from "../assets/ani1.mp4"; 

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  paddingTop: theme.spacing(22),
  paddingBottom: theme.spacing(28),
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  // ✅ Fallback background (Visible after video or if video has already played)
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.85)} 0%, ${alpha("#001e29", 0.7)} 100%),
               url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backdropFilter: "blur(10px)", 
  
  textAlign: "center",
  color: "#fff",
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const BackgroundVideo = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
});

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  background: `linear-gradient(135deg, ${alpha("#001e29", 0.4)} 0%, ${alpha("#001e29", 0.6)} 100%)`,
}));

const MotionContent = motion.create ? motion.create(Box) : motion.div;

export const ServicesHero = () => {
  const theme = useTheme();

  // ✅ 1. Check if video has already played in this session
  const [videoEnded, setVideoEnded] = useState(() => {
    return sessionStorage.getItem("servicesVideoPlayed") === "true";
  });

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // ✅ 2. Store flag in sessionStorage
    sessionStorage.setItem("servicesVideoPlayed", "true");
  };

  return (
    <Box sx={{ overflowX: "clip", width: "100%", position: "relative", bgcolor: "#f8fafc" }}>
      
      <HeroWrapper component="section">
        {/* 1. BACKGROUND LAYERS (Video & Overlay) */}
        <AnimatePresence mode="wait">
          {!videoEnded && (
            <motion.div
              key="services-video-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            >
              <BackgroundVideo 
                src={servicesVideo} 
                autoPlay 
                muted 
                playsInline 
                onEnded={handleVideoEnd} 
              />
              <VideoOverlay />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. CONTENT LAYER (Visible immediately with video) */}
        <Container sx={{ position: "relative", zIndex: 10 }}>
          <MotionContent
            sx={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Stack spacing={4} alignItems="center" sx={{ maxWidth: 850, mx: "auto" }}>
              
              <Typography 
                variant="overline" 
                fontWeight="900" 
                sx={{ 
                    letterSpacing: 3, 
                    color: alpha("#fff", 0.8),
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
                }}
              >
                AREAS WHAT WE SERVE
              </Typography>

              <Typography 
                variant="h1" 
                fontWeight="900" 
                sx={{ 
                    fontSize: { xs: "3rem", md: "5rem" }, 
                    lineHeight: 1.1,
                    textShadow: `0 10px 40px ${alpha("#000", 0.6)}`,
                }}
              >
                IT Solutions for <br />
                <Box component="span" sx={{ color: alpha("#fff", 0.5) }}>
                  Your Business
                </Box>
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                    fontSize: "1.2rem", 
                    color: alpha("#fff", 0.8), 
                    maxWidth: 600,
                    textShadow: "0 2px 10px rgba(0,0,0,0.4)" 
                }}
              >
                Empowering your digital journey with scalable engineering and enterprise-grade infrastructure.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
                 
              </Stack>
            </Stack>
          </MotionContent>
        </Container>
      </HeroWrapper>
    </Box>
  );
};