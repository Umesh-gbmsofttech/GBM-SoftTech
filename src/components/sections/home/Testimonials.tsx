import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  alpha,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { West, East, FormatQuote } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---

const clients = [
  {
    name: "Ankit Sharma",
    role: "Product Manager @ NextGen",
    initials: "AS",
    quote: "GBM SoftTech delivered on every promise. The modernization of our architecture was handled with surgical precision.",
  },
  {
    name: "Sara Jenkins",
    role: "Operations Lead @ Vertex",
    initials: "SJ",
    quote: "The human touch in their digital innovation sets them apart. They engineered a business ecosystem that transformed our throughput.",
  },
  {
    name: "Dev Datta",
    role: "CTO @ Logic-S",
    initials: "DD",
    quote: "Scalable, robust, and clean code. Their team understands enterprise-level security in a way most boutique firms simply don't.",
  },
];

// --- MOTION COMPONENTS & STYLES ---

const MotionBox = motion.create(Box);
const MotionDiv = motion.create("div");

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#ffffff",
  position: "relative",
  overflow: "hidden",
}));

const QuoteIconBg = styled(MotionDiv)({
  position: "absolute",
  top: -40,
  left: -20,
  opacity: 0.05,
  fontSize: "15rem",
  pointerEvents: "none",
  color: "#001e29",
});

// --- MAIN COMPONENT ---

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState(0);

  const slide = useCallback((newDir: number) => {
    setDirection(newDir);
    setIndex((prev) => (prev + newDir + clients.length) % clients.length);
  }, []);

  // --- AUTO-PLAY LOOP ---
  useEffect(() => {
    const timer = setInterval(() => {
      slide(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [slide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(8px)",
    }),
  };

  return (
    <Section>
      <Container maxWidth="lg">
        {/* Alignment Fix: alignItems="center" | Spacing Fix: spacing={12} */}
        <Grid container spacing={12} alignItems="center">
          
          {/* Left Side: Brand Narrative */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ width: 40, height: 3, bgcolor: "primary.main" }} />
                <Typography variant="overline" sx={{ fontWeight: 900, color: "primary.main", letterSpacing: 3, fontSize: '0.8rem' }}>
                  REVIEWS
                </Typography>
              </Stack>

              <Typography variant="h2" sx={{ fontWeight: 900, color: "#001e29", mb: 5, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Client <Box component="span" sx={{ color: alpha("#001e29", 0.3) }}>Insights.</Box>
              </Typography>

              <Stack direction="row" spacing={3} alignItems="center">
                {/* Visual Step Indicator */}
                <Box sx={{ position: "relative", width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <svg width="70" height="70" viewBox="0 0 70 70" style={{ position: 'absolute' }}>
                    <circle cx="35" cy="35" r="32" fill="none" stroke={alpha("#001e29", 0.08)} strokeWidth="3" />
                    <motion.circle
                      cx="35" cy="35" r="32"
                      fill="none"
                      stroke="#1976d2"
                      strokeWidth="3"
                      strokeDasharray="201"
                      initial={{ strokeDashoffset: 201 }}
                      animate={{ strokeDashoffset: 201 - (201 * (index + 1)) / clients.length }}
                      transition={{ type: "spring", stiffness: 50, damping: 15 }}
                      style={{ rotate: -90, transformOrigin: "center" }}
                    />
                  </svg>
                  <Typography sx={{ fontWeight: 900, fontSize: "1.2rem", color: "#001e29" }}>
                    0{index + 1}
                  </Typography>
                </Box>

                {/* Navigation Buttons */}
                <Stack direction="row" spacing={1.5}>
                  {[
                    { icon: <West />, dir: -1, label: 'Prev' },
                    { icon: <East />, dir: 1, label: 'Next' },
                  ].map((btn, i) => (
                    <IconButton
                      key={i}
                      onClick={() => slide(btn.dir)}
                      aria-label={btn.label}
                      sx={{
                        width: 50, height: 50,
                        border: `1px solid ${alpha("#001e29", 0.1)}`,
                        bgcolor: 'transparent',
                        color: "#001e29",
                        "&:hover": { 
                          bgcolor: "#001e29", 
                          color: "#fff",
                          borderColor: "#001e29" 
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    >
                      {React.cloneElement(btn.icon as React.ReactElement, { sx: { fontSize: 22 } })}
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </MotionBox>
          </Grid>

          {/* Right Side: Animated Quotes */}
          <Grid item xs={12} md={7}>
            <Box sx={{ minHeight: 320, display: "flex", alignItems: "center", position: "relative" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <MotionBox
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 180, damping: 20 },
                    opacity: { duration: 0.4 },
                  }}
                  style={{ width: "100%" }}
                >
                  <Box sx={{ position: "relative", pl: { md: 6 } }}>
                    <QuoteIconBg>
                      <FormatQuote fontSize="inherit" />
                    </QuoteIconBg>
                    
                    <Typography
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.85rem" },
                        color: "#001e29",
                        lineHeight: 1.4,
                        fontWeight: 500,
                        mb: 5,
                        position: "relative",
                        zIndex: 1,
                        fontStyle: 'italic'
                      }}
                    >
                      "{clients[index].quote}"
                    </Typography>

                    <Stack direction="row" spacing={2.5} alignItems="center">
                      <Box sx={{ 
                        width: 56, height: 56, 
                        bgcolor: "#1976d2", 
                        borderRadius: "16px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", 
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        boxShadow: `0 10px 20px ${alpha("#1976d2", 0.3)}`
                      }}>
                        {clients[index].initials}
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 900, color: "#001e29", lineHeight: 1.2, fontSize: '1.1rem' }}>
                          {clients[index].name}
                        </Typography>
                        <Typography sx={{ 
                          color: alpha("#001e29", 0.5), 
                          fontWeight: 700, 
                          fontSize: "0.75rem", 
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          mt: 0.5
                        }}>
                          {clients[index].role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </MotionBox>
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};