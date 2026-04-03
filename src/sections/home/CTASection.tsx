import React from "react";
import { Box, Typography, Stack, Button, alpha, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForward, Bolt } from "@mui/icons-material";
import { motion, HTMLMotionProps } from "framer-motion";

// --- STYLED COMPONENTS ---

const CTAWrapper = styled(motion.div)<HTMLMotionProps<"div">>(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(10, 8),
  borderRadius: "0px", // Sharp architectural edges
  backgroundColor: "#001e29",
  overflow: "hidden",
  border: `1px solid ${alpha("#fff", 0.1)}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  
  // High-end Mesh Gradient Background
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 50%)`,
    zIndex: 0,
  }
}));

const TechPattern = styled(Box)({
  position: "absolute",
  inset: 0,
  opacity: 0.05,
  backgroundImage: `radial-gradient(${alpha("#fff", 1)} 0.5px, transparent 0.5px)`,
  backgroundSize: "30px 30px",
  zIndex: 1,
});

const GlowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(2, 6),
  fontSize: "1rem",
  fontWeight: 900,
  borderRadius: "0px",
  letterSpacing: "2px",
  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
  boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
  "&:hover": {
    backgroundColor: "#fff",
    color: "#001e29",
    transform: "translateY(-5px)",
    boxShadow: `0 20px 40px ${alpha("#fff", 0.2)}`,
    "& .MuiButton-endIcon": { transform: "translateX(8px)" }
  },
  "& .MuiButton-endIcon": { transition: "transform 0.4s ease" }
}));

// --- MAIN COMPONENT ---

export const CTASection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 15, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <CTAWrapper
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TechPattern />
          
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
              <Bolt sx={{ color: "primary.main", fontSize: "1.2rem" }} />
              <Typography 
                variant="overline" 
                sx={{ 
                  color: "primary.main", 
                  fontWeight: 900, 
                  letterSpacing: 6,
                  opacity: 0.8
                }}
              >
                NEXT STEPS
              </Typography>
            </Stack>

            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                color: "#fff", 
                mb: 3, 
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                lineHeight: 1,
                letterSpacing: "-0.04em"
              }}
            >
              Ready to engineer <br />
              <Box component="span" sx={{ color: alpha("#fff", 0.15) }}>your next impact?</Box>
            </Typography>

            <Typography 
              sx={{ 
                color: alpha("#fff", 0.6), 
                fontSize: "1.2rem", 
                maxWidth: "600px", 
                mx: "auto", 
                mb: 6,
                lineHeight: 1.8 
              }}
            >
              Whether you're scaling a startup or modernizing an enterprise, 
              we provide the technical precision to get you there.
            </Typography>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlowButton 
                variant="contained" 
                endIcon={<ArrowForward />}
              >
                START A CONVERSATION
              </GlowButton>
            </motion.div>
          </Box>

          {/* Decorative Corner Element */}
          <Box 
            sx={{ 
              position: "absolute", 
              bottom: 0, 
              right: 0, 
              width: "150px", 
              height: "150px", 
              borderTop: `1px solid ${alpha("#fff", 0.1)}`,
              borderLeft: `1px solid ${alpha("#fff", 0.1)}`,
              opacity: 0.5
            }} 
          />
        </CTAWrapper>
      </Container>
    </Box>
  );
};