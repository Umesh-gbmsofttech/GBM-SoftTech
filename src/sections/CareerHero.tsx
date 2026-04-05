// @ts-nocheck
import { useState } from "react";
import { Box, Typography, alpha, Stack, Fade, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Pill } from "@components/ui/StyledCard";
import careerVideo from "../assets/animation.mp4"; 

// --- Styled Components ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  // RESTORED EXACT ORIGINAL STYLING
  width: "100%",
  margin: 0,
  padding: 0,
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(35),
  minHeight: "calc(100vh - 56px)",
  
background: `linear-gradient(150deg, ${alpha("#001e29", 0.95)} 0%, ${alpha("#001e29", 0.85)} 100%),
               url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",
  position: "relative",
  clipPath: "ellipse(150% 100% at 50% 0%)",
  overflow: "hidden", // Added to keep video within clipPath
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
  background: `linear-gradient(135deg, ${alpha(theme.palette.common.black, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.3)} 100%)`,
}));

// --- Main Component ---

export const CareerHero = () => {
  const theme = useTheme();
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <HeroWrapper component="section">
      {/* 1. One-Time Viewable Video Layer */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 5 
            }}
          >
            <BackgroundVideo 
              src={careerVideo} 
              autoPlay 
              muted 
              playsInline
              onEnded={() => setVideoEnded(true)} 
            />
            <VideoOverlay />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Content: Visible after video ends */}
      <Fade in={videoEnded} timeout={1500}>
        <Box sx={{ px: { xs: 2, md: 4 }, position: "relative", zIndex: 10 }}>
          <Stack spacing={4} alignItems="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            
            <Pill 
              sx={{ 
                px: 3, py: 1, 
                backgroundColor: alpha(theme.palette.secondary.main, 0.2), 
                color: 'inherit',
                borderColor: alpha('#fff', 0.3),
                backdropFilter: 'blur(4px)'
              }}
            >
              Join the GBM SoftTech Innovators
            </Pill>
            
            <Typography 
              variant="h2" 
              fontWeight="900" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4.5rem' }, 
                lineHeight: 1.1, 
                letterSpacing: -1.5,
                textShadow: '0 4px 12px rgba(0,0,0,0.25)' 
              }}
            >
              Shape the Future of <br />
              Technology With Us
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 700,
                fontWeight: 500, 
                lineHeight: 1.6,
                color: alpha('#fff', 0.8),
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Explore opportunities to grow your career in an environment built on innovation, 
              mentorship, and global impact. Your next breakthrough starts here.
            </Typography>
            
          </Stack>
        </Box>
      </Fade>
    </HeroWrapper>
  );
};
