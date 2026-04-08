// @ts-nocheck
import React, { useState } from "react";
import { Box, Typography, alpha, useTheme, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Pill } from "@components/ui/StyledCard";
import aboutVideoFile from "../../assets/ani1.mp4"; 

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(45), 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#001e29",
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, ${alpha("#001e29", 0.7)}, ${alpha("#001e29", 0.95)})`,
  },
});

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
  background: `linear-gradient(135deg, ${alpha("#001e29", 0.5)} 0%, ${alpha("#001e29", 0.7)} 100%)`,
}));

const MotionContent = motion.create ? motion.create(Box) : motion.div;

// --- MAIN COMPONENT ---

export const AboutHero: React.FC = () => {
  const theme = useTheme();
  
  const [hasSeenVideo] = useState(() => {
    return sessionStorage.getItem("aboutVideoPlayed") === "true";
  });

  const [videoEnded, setVideoEnded] = useState(hasSeenVideo);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    sessionStorage.setItem("aboutVideoPlayed", "true");
  };

  return (
    <div style={{ overflowX: "clip", width: "100%", maxWidth: "100%", position: "relative" }}>
      
      <HeroWrapper component="section">
        {/* BACKGROUND LAYERS */}
        <AnimatePresence mode="wait">
          {!videoEnded ? (
            <motion.div
              key="video-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            >
              <BackgroundVideo 
                src={aboutVideoFile} 
                autoPlay 
                muted 
                playsInline 
                onEnded={handleVideoEnd} 
              />
              <VideoOverlay />
            </motion.div>
          ) : (
            <motion.div 
              key="image-fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            >
              <BackgroundImage />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* CONTENT LAYER */}
        <Box sx={{ width: '100%', px: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <Stack spacing={4} alignItems="center" sx={{ textAlign: "center", maxWidth: 900 }}>
            
            {/* 1. PILL BADGE (Like ContactHero) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Pill
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.25),
                  borderColor: alpha("#fff", 0.3),
                  backdropFilter: "blur(8px)",
                  color: "#fff"
                }}
              >
                Engineering the Future since 2021
              </Pill>
            </motion.div>

            {/* 2. MAIN TITLE */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  color: "#fff",
                  lineHeight: 1.1,
                  textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                Unveiling the <br /> 
                <span style={{ color: "#00A3E0" }}>GBM SoftTech</span> Identity
              </Typography>
            </motion.div>

            {/* 3. SUBTITLE */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 750,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: alpha("#fff", 0.9),
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                }}
              >
                We are more than a software firm. We are a collection of innovators, 
                architects, and dreamers dedicated to building high-performance 
                digital solutions that move the world forward.
              </Typography>
            </motion.div>

            {/* 4. BUTTONS (Like ContactHero) */}
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              sx={{ 
                mt: 2,
                opacity: 0,
                animation: "fadeIn 1s ease-out 0.6s forwards",
                "@keyframes fadeIn": { from: { opacity: 0 }, to: { opacity: 1 } }
              }}
            >
              
            </Stack>

            {/* Background Decorative Text (Identity) */}
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: { xs: "8rem", md: "16rem" },
                fontWeight: 900,
                color: alpha("#fff", 0.03),
                zIndex: -1,
                pointerEvents: "none",
                textTransform: "uppercase"
              }}
            >
              Identity
            </Typography>
          </Stack>
        </Box>
      </HeroWrapper>
    </div>
  );
};