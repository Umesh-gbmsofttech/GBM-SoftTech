import React from "react";
import { Box, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "60vh", 
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#001e29", 
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, ${alpha("#001e29", 0.7)}, ${alpha("#001e29", 0.9)})`,
  },
});

// ✅ FIX: Use a regular styled div for styles, then wrap it with motion.create
const StyledContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
});

const MotionContent = motion.create(StyledContent);

// --- MAIN COMPONENT ---

export const AboutHero: React.FC = () => {
  return (
    <HeroWrapper component="section">
      <BackgroundImage />
      
      {/* ✅ Use the MotionContent component here */}
      <MotionContent
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 900,
            letterSpacing: 8,
            mb: 1,
            display: "block",
            opacity: 0.8
          }}
        >
          GBM SOFTTECH
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "4rem", md: "8rem" },
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            position: "relative",
            textShadow: `0 10px 30px ${alpha("#000", 0.3)}`,
          }}
        >
          About
          <Box
            component="span"
            sx={{
              position: "absolute",
              bottom: -10,
              left: "10%",
              right: "10%",
              height: "4px",
              bgcolor: "primary.main",
              borderRadius: "2px",
              opacity: 0.6
            }}
          />
        </Typography>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: { xs: "8rem", md: "15rem" },
            fontWeight: 900,
            color: alpha("#fff", 0.03),
            zIndex: -1,
            pointerEvents: "none",
            textTransform: "uppercase"
          }}
        >
          Identity
        </Typography>
      </MotionContent>
    </HeroWrapper>
  );
};