// @ts-nocheck
import { alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
// 1. Import your local video file
import contactAnimation from "../assets/Animation.mp4"; 

const VideoContainer = styled(motion.div)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto 2rem",
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
  boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const StyledVideo = styled("video")({
  width: "100%",
  display: "block",
  borderRadius: "inherit",
});

export const HeroVideo = ({ trigger: _trigger }: { trigger: boolean }) => {
  return (
    <VideoContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <StyledVideo
        src={contactAnimation}
        autoPlay
        loop
        muted
        playsInline
        // This ensures the video stays bright and clean
        poster="/path-to-a-placeholder-image.jpg" 
      />
    </VideoContainer>
  );
};
