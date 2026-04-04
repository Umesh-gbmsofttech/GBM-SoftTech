import React from "react";
import { Box, Typography, alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// --- STYLED COMPONENTS ---

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  
  // ✅ INCREASED HEIGHT: 
  // PaddingTop balanced at 25.
  // PaddingBottom significantly increased to 50 to drop the bottom much lower.
  paddingTop: theme.spacing(13),
  paddingBottom: theme.spacing(50), 
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#001e29",

  // ✅ ADJUSTED CONCAVE EFFECT:
  // Using 110% height on the ellipse ensures the curve is smooth 
  // and deep without cutting off your text content.
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

const MotionContent = motion.create(Box);

// --- MAIN COMPONENT ---

export const AboutHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrapper component="section">
        <BackgroundImage />
        
        <MotionContent
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Overline */}
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 900,
              letterSpacing: 8,
              mb: 1,
              display: "block",
              opacity: 0.8
            }}
          >
            GBM SOFTTECH
          </Typography>

          {/* Main Centered Text */}
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
                bottom: -12,
                left: "15%",
                right: "15%",
                height: "5px",
                bgcolor: theme.palette.primary.main,
                borderRadius: "2px",
                opacity: 0.7
              }}
            />
          </Typography>

          {/* Decorative background text for depth */}
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
        </MotionContent>
      </HeroWrapper>
    </Box>
  );
};