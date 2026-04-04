import React from "react";
import { Box, Typography, Stack, Button, alpha, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForward, Bolt } from "@mui/icons-material";
import { motion, HTMLMotionProps } from "framer-motion";

// --- STYLED COMPONENTS ---

const CTAWrapper = styled(motion.div)<HTMLMotionProps<"div">>(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(12, 8),
  borderRadius: "24px", // Matches the soft corners of your Client Insights cards
  backgroundColor: "#001e29",
  overflow: "hidden",
  border: `1px solid ${alpha("#fff", 0.1)}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: `0 40px 80px -20px ${alpha("#001e29", 0.4)}`,
  
  // Interactive Linear Gradient Background
  background: `linear-gradient(135deg, #001e29 0%, #003547 100%)`,
  
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${alpha("#3b82f6", 0.15)} 0%, transparent 50%)`,
    zIndex: 1,
  }
}));

const CircuitPattern = styled(motion.div)({
  position: "absolute",
  inset: 0,
  opacity: 0.05,
  // Technical Circuit/Grid Pattern
  backgroundImage: `
    linear-gradient(${alpha("#fff", 1)} 1px, transparent 1px),
    linear-gradient(90deg, ${alpha("#fff", 1)} 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
  maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
  zIndex: 1,
});

const GlowButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: "#3ca61c", // GBM Orange for high-conversion focus
  color: "#fff",
  padding: "18px 48px",
  fontSize: "1rem",
  fontWeight: 900,
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  boxShadow: `0 15px 30px ${alpha("#1c5ca6", 0.4)}`,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#1c5ca6",
    boxShadow: `0 20px 40px ${alpha("#1c5ca6", 0.5)}`,
  }
}));

// --- MAIN COMPONENT ---

export const CTASection: React.FC = () => {
  // Logic to track mouse for the subtle background glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <Box component="section" sx={{ py: 20, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <CTAWrapper
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated Circuit Overlay */}
          <CircuitPattern 
            animate={{ 
              opacity: [0.03, 0.07, 0.03],
              backgroundPosition: ["0px 0px", "40px 40px"] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
                <Bolt sx={{ color: "#3ca61c", fontSize: "1.5rem" }} />
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: "#3ca61c", 
                    fontWeight: 900, 
                    letterSpacing: 4,
                  }}
                >
                  SYSTEM READY
                </Typography>
              </Stack>
            </motion.div>

            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                color: "#fff", 
                mb: 3, 
                fontSize: { xs: "2.8rem", md: "4.5rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.04em"
              }}
            >
              Ready to engineer <br />
              <Box component="span" sx={{ color: alpha("#fff", 0.2) }}>your next impact?</Box>
            </Typography>

            <Typography 
              sx={{ 
                color: alpha("#fff", 0.6), 
                fontSize: "1.2rem", 
                maxWidth: "650px", 
                mx: "auto", 
                mb: 8,
                lineHeight: 1.8 
              }}
            >
              Join 50+ enterprises scaling with GBM SoftTech. From legacy modernization 
              to greenfield AI infrastructure, we deploy excellence.
            </Typography>

            <Stack direction="row" justifyContent="center">
              <GlowButton
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Transmission
                <ArrowForward />
              </GlowButton>
            </Stack>
          </Box>

          {/* Decorative Corner Accent */}
          <Box 
            sx={{ 
              position: "absolute", 
              bottom: 20, 
              right: 20, 
              width: "60px", 
              height: "60px", 
              borderRight: "2px solid #1c5ca6", 
              borderBottom: "2px solid #1c5ca6",
              opacity: 0.3,
              borderRadius: "0 0 12px 0"
            }} 
          />
        </CTAWrapper>
      </Container>
    </Box>
  );
}; 