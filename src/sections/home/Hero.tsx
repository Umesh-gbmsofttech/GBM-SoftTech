// @ts-nocheck
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Stack, alpha, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

// --- Assets ---
import heroBg from "../../assets/download.jpg";
import homeVideo from "../../assets/ani1.mp4";

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "85vh",
  overflow: "hidden",
  backgroundColor: "#001e29", // Deep base color
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

const BackgroundLayer = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 1,
});

const BackgroundVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// ✅ SUBTLE VISIBILITY ADJUSTMENT
const StyledBackgroundImage = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${heroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    // Very high alpha (0.85 to 0.95) makes the image only "a little bit" visible
    background: `linear-gradient(to bottom, ${alpha("#001e29", 0.85)}, ${alpha("#001e29", 0.95)})`,
  },
});

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  zIndex: 2,
  background: `linear-gradient(135deg, ${alpha("#001e29", 0.5)} 0%, ${alpha("#001e29", 0.8)} 100%)`,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(35),
  display: "flex",
  alignItems: "center",
  color: "#fff",
}));

const PillButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "50px",
  padding: "16px 48px",
  fontWeight: 900,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  ...(variant === "contained" && {
    backgroundColor: "#024aa8",
    color: "#fff",
    "&:hover": { backgroundColor: "#0356c3", transform: "translateY(-4px)" },
  }),
  ...(variant === "outlined" && {
    backgroundColor: "#fff",
    color: "#001e29",
    border: "none",
    "&:hover": { backgroundColor: alpha("#fff", 0.9), transform: "translateY(-4px)" },
  }),
}));

const AttentionWrap = styled(motion.div)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "50px",
});

export const Hero = () => {
  const [hasPlayed] = useState(() => sessionStorage.getItem("homeVideoPlayed") === "true");
  const [videoEnded, setVideoEnded] = useState(hasPlayed);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    sessionStorage.setItem("homeVideoPlayed", "true");
  };

  return (
    <HeroContainer>
      
      <BackgroundLayer>
        <AnimatePresence mode="wait">
          {!videoEnded ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <BackgroundVideo src={homeVideo} autoPlay muted playsInline onEnded={handleVideoEnd} />
              <VideoOverlay />
            </motion.div>
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <StyledBackgroundImage />
            </motion.div>
          )}
        </AnimatePresence>
      </BackgroundLayer>

      <ContentWrapper>
        <Container>
          <Stack spacing={4} alignItems={{ xs: "center", md: "flex-start" }} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.8rem" }, fontWeight: 900, lineHeight: 1.1, animation: `${fadeIn} 0.8s ease-out forwards`, textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}>
              Engineered for speed <br />
              <Box component="span" sx={{ color: alpha("#fff", 0.5) }}>and innovation.</Box>
            </Typography>

            <Typography variant="body1" sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" }, color: alpha("#fff", 0.9), maxWidth: "620px", opacity: 0, animation: `${fadeIn} 1s ease-out 0.3s forwards` }}>
              We help enterprises and high-growth startups modernize with confidence through bespoke solutions.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <AttentionWrap whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <PillButton variant="contained" component={RouterLink} to="/contact">Get Started</PillButton>
              </AttentionWrap>
              <AttentionWrap whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <PillButton variant="outlined" component={RouterLink} to="/services">Our Services</PillButton>
              </AttentionWrap>
            </Stack>
          </Stack>
        </Container>
      </ContentWrapper>

    </HeroContainer>
  );
};