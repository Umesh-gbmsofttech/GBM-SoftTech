import React, { useState, useCallback } from "react";
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
import { West, East } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// --- INTERFACES ---

interface Client {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

// --- STYLED COMPONENTS ---

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: "#fcfdfe",
  position: "relative",
  overflow: "hidden",
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  width: "2px",
  height: "100px",
  backgroundColor: alpha("#001e29", 0.05),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "var(--progress)",
    backgroundColor: theme.palette.primary.main,
    transition: "height 0.6s cubic-bezier(0.2, 1, 0.3, 1)",
  },
}));

// --- DATA ---

const clients: Client[] = [
  {
    name: "Ankit Sharma",
    role: "Product Manager @ NextGen",
    initials: "AS",
    quote:
      "GBM SoftTech delivered on every promise. The modernization of our architecture was handled with surgical precision and zero downtime.",
  },
  {
    name: "Sara Jenkins",
    role: "Operations Lead @ Vertex",
    initials: "SJ",
    quote:
      "The human touch in their digital innovation sets them apart. They engineered a business ecosystem that transformed our throughput.",
  },
  {
    name: "Dev Datta",
    role: "CTO @ Logic-S",
    initials: "DD",
    quote:
      "Scalable, robust, and clean code. Their team understands enterprise-level security in a way most boutique firms simply don't.",
  },
];

// --- MAIN COMPONENT ---

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const slide = useCallback((newDir: number) => {
    setIndex((prev) => (prev + newDir + clients.length) % clients.length);
  }, []);

  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container spacing={12} alignItems="center">
          
          {/* Left Side: Navigation & Progress Indicator */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 900,
                letterSpacing: 8,
                display: "block",
                mb: 3,
              }}
            >
              TESTIMONIALS
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: "#001e29",
                lineHeight: 1.1,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 6,
              }}
            >
              Voices of
              <br />
              <Box component="span" sx={{ color: alpha("#001e29", 0.15) }}>
                Trust.
              </Box>
            </Typography>

            <Stack direction="row" spacing={4} alignItems="center">
              {/* Dynamic Progress Bar */}
              <VerticalLine
                style={
                  {
                    "--progress": `${((index + 1) / clients.length) * 100}%`,
                  } as React.CSSProperties
                }
              />
              
              <Box>
                <Typography
                  sx={{ fontWeight: 900, color: "#001e29", fontSize: "1.2rem" }}
                >
                  0{index + 1}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 900,
                    color: alpha("#001e29", 0.2),
                    fontSize: "0.8rem",
                  }}
                >
                  OF 0{clients.length}
                </Typography>
              </Box>

              {/* Navigation Controls */}
              <Stack direction="row" spacing={1}>
                <IconButton
                  onClick={() => slide(-1)}
                  aria-label="previous testimonial"
                  sx={{
                    border: `1px solid ${alpha("#001e29", 0.1)}`,
                    borderRadius: 0,
                    p: 1.5,
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <West fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => slide(1)}
                  aria-label="next testimonial"
                  sx={{
                    border: `1px solid ${alpha("#001e29", 0.1)}`,
                    borderRadius: 0,
                    p: 1.5,
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <East fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Side: Animated Content Overlay */}
          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <Box sx={{ position: "relative" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.8rem" },
                      color: "#001e29",
                      lineHeight: 1.6,
                      mb: 6,
                      fontWeight: 400,
                      fontStyle: "italic",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    "{clients[index].quote}"
                  </Typography>

                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box sx={{ width: 40, height: 2, bgcolor: "primary.main" }} />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          color: "#001e29",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        {clients[index].name}
                      </Typography>
                      <Typography
                        sx={{
                          color: alpha("#001e29", 0.4),
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: 2,
                        }}
                      >
                        {clients[index].role}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};