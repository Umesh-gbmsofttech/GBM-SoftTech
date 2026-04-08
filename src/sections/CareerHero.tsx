// @ts-nocheck
import { useState } from "react";
import { Box, Typography, alpha, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Pill } from "@components/ui/StyledCard";
import careerVideo from "../assets/ani1.mp4";
import heroContent from "../content/careerHeroContent";

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(35),
  minHeight: "calc(100vh - 56px)",
  // Fallback background image (Visible after video or if video fails)
  background: `linear-gradient(150deg, ${alpha("#001e29", 0.9)} 0%, ${alpha("#001e29", 0.8)} 100%),
               url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  textAlign: "center",
  color: "#fff",
  position: "relative",
  clipPath: "ellipse(150% 100% at 50% 0%)",
  overflow: "hidden",
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

export const CareerHero = () => {
  const theme = useTheme();

  // ✅ 1. Check if video has already played in this session
  const [videoEnded, setVideoEnded] = useState(() => {
    return sessionStorage.getItem("careerVideoPlayed") === "true";
  });

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // ✅ 2. Store flag so it doesn't play again until tab is closed
    sessionStorage.setItem("careerVideoPlayed", "true");
  };

  return (
    <HeroWrapper component="section">
      
      {/* 1. VIDEO BACKGROUND LAYER */}
      <AnimatePresence mode="wait">
        {!videoEnded && (
          <motion.div
            key="bg-video-layer"
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
              src={careerVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd} // Sets state and session storage
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
        <Stack spacing={4} alignItems="center" sx={{ maxWidth: 800, mx: "auto" }}>
          
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
                borderColor: alpha("#fff", 0.4),
                backdropFilter: "blur(8px)",
              }}
            >
              {heroContent.badge}
            </Pill>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
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
              dangerouslySetInnerHTML={{
                __html: heroContent.title,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                fontWeight: 500,
                lineHeight: 1.6,
                color: alpha("#fff", 0.9),
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              {heroContent.subtitle}
            </Typography>
          </motion.div>

        </Stack>
      </Box>
    </HeroWrapper>
  );
};