// @ts-nocheck
import { useState } from "react";
import { Box, Typography, alpha, Stack, useTheme, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Pill } from "@components/ui/StyledCard";
import contactVideo from "../assets/ani1.mp4"; 

// --- Styled Components ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(35),
  minHeight: "calc(100vh - 56px)",
  // ✅ Fallback background image (Visible after video or if video has already played)
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.95)} 0%, ${alpha("#001e29", 0.85)} 100%),
               url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  clipPath: "ellipse(150% 100% at 50% 0%)",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    minHeight: "calc(100vh - 64px)",
  },
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
  background: `linear-gradient(135deg, ${alpha("#001e29", 0.5)} 0%, ${alpha("#001e29", 0.7)} 100%)`,
}));

export const ContactHero = () => {
  const theme = useTheme();

  // ✅ 1. Check if video has already played in this session
  const [videoEnded, setVideoEnded] = useState(() => {
    return sessionStorage.getItem("contactVideoPlayed") === "true";
  });

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // ✅ 2. Store flag so it stays static for the rest of the session
    sessionStorage.setItem("contactVideoPlayed", "true");
  };

  return (
    <HeroWrapper component="section">
      
      {/* 1. VIDEO BACKGROUND LAYER */}
      <AnimatePresence mode="wait">
        {!videoEnded && (
          <motion.div
            key="contact-video-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <BackgroundVideo 
              src={contactVideo} 
              autoPlay 
              muted 
              playsInline 
              onEnded={handleVideoEnd} 
            />
            <VideoOverlay />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CONTENT LAYER (Visible immediately) */}
      <Box 
        sx={{ 
          px: { xs: 2, md: 4 }, 
          position: "relative", 
          zIndex: 10,
        }}
      >
        <Stack spacing={4} alignItems="center" sx={{ maxWidth: 850, mx: "auto" }}>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Pill
              sx={{
                px: 3,
                py: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.25),
                color: "inherit",
                borderColor: alpha("#fff", 0.3),
                backdropFilter: "blur(8px)",
              }}
            >
              Get in Touch with GBM SoftTech
            </Pill>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                lineHeight: 1.1,
                letterSpacing: -1.5,
                textShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
            >
              Let’s Build Your <br />
              Digital Future Together
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                fontWeight: 500,
                lineHeight: 1.6,
                color: alpha("#fff", 0.9),
                fontSize: { xs: "1rem", md: "1.25rem" },
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              Have a vision? We have the engineering expertise. Reach out to discuss 
              your next breakthrough project or learn more about our solutions.
            </Typography>
          </motion.div>

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

        </Stack>
      </Box>
    </HeroWrapper>
  );
};