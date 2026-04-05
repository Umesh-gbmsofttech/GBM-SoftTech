// @ts-nocheck
import React from "react";
import { Box, Typography, Container, Grid, Stack, alpha, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { TrendingUp } from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: "#fff",
  position: "relative",
  overflow: "hidden",
}));

const TechnicalGrid = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "50%",
  height: "100%",
  backgroundImage: `linear-gradient(${alpha("#001e29", 0.03)} 1px, transparent 1px), linear-gradient(90deg, ${alpha("#001e29", 0.03)} 1px, transparent 1px)`,
  backgroundSize: "50px 50px",
  zIndex: 0,
});

// Explicitly typing the motion div for MUI styled components
const ImageContainer = styled(motion.div)<HTMLMotionProps<"div">>(() => ({
  position: "relative",
  width: "100%",
  height: "650px",
  overflow: "hidden",
  boxShadow: `60px 60px 0px ${alpha("#001e29", 0.02)}`, 
  "& img": {
    width: "100%",
    height: "115%", // Extra height for parallax travel
    objectFit: "cover",
  }
}));

const FeatureMarker = styled(motion.div)<HTMLMotionProps<"div">>(({ theme }) => ({
  width: "12px",
  height: "12px",
  backgroundColor: theme.palette.primary.main,
  flexShrink: 0,
}));

const FloatingBadge = styled(motion.div)<HTMLMotionProps<"div">>(({ theme }) => ({
  position: "absolute",
  bottom: "60px",
  right: "-30px",
  backgroundColor: "#001e29",
  color: "#fff",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  zIndex: 5,
}));

// --- COMPONENT ---

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Image parallax effect: moves the image slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const features: string[] = [
    "Architecting Scalable Digital Ecosystems",
    "Transforming Complex Business Logic",
    "Test-Driven Engineering Culture"
  ];

  return (
    <SectionWrapper>
      <TechnicalGrid />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={12} alignItems="center">
          
          {/* Left Side: Visuals with Parallax */}
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <ImageContainer
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <motion.img 
                  style={{ y }}
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office" 
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, ${alpha("#001e29", 0.3)}, transparent)`,
                  }}
                />
              </ImageContainer>

              <FloatingBadge
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <TrendingUp sx={{ color: "primary.main", fontSize: "2.5rem" }} />
                <div>
                  <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1 }}>98%</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.5, textTransform: "uppercase", letterSpacing: 3, fontWeight: 700 }}>
                    Client Trust
                  </Typography>
                </div>
              </FloatingBadge>
            </div>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 900, letterSpacing: 8, display: "block", mb: 2 }}>
                  OUR PHILOSOPHY
                </Typography>
                
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, lineHeight: 1.1, color: "#001e29", fontSize: { md: "3.8rem" } }}>
                  Where Human <br />
                  Touch Meets <br />
                  <Box component="span" sx={{ color: alpha("#001e29", 0.1) }}>Innovation.</Box>
                </Typography>

                <Typography sx={{ color: alpha("#001e29", 0.6), fontSize: "1.15rem", lineHeight: 1.9, mb: 4 }}>
                  We help enterprises modernize with confidence. By blending high-touch 
                  consultation with surgical technical precision, we ensure your 
                  digital transformation is both human-centric and future-proof.
                </Typography>
              </motion.div>

              {/* Minimalist Feature List with Staggered Animation */}
              <Stack spacing={3}>
                {features.map((text, i) => (
                  <Stack 
                    key={i} 
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    direction="row" 
                    spacing={3} 
                    alignItems="center"
                  >
                    <FeatureMarker 
                       whileInView={{ rotate: 45 }}
                       transition={{ delay: 0.8 + (i * 0.1) }}
                    />
                    <Typography sx={{ fontWeight: 800, color: "#001e29", fontSize: "0.95rem", letterSpacing: 1 }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box 
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
                sx={{ pt: 4 }}
              >
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: "#001e29",
                    borderColor: "#001e29",
                    px: 8, 
                    py: 2.5, 
                    borderRadius: "0px",
                    fontWeight: 900,
                    letterSpacing: 4,
                    transition: "all 0.4s",
                    "&:hover": { 
                      bgcolor: "#001e29",
                      color: "#fff",
                      transform: "translateX(10px)"
                    }
                  }}
                >
                  LEARN OUR METHOD
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};
