// @ts-nocheck
import React, { useState } from "react";
import { Box, Typography, Stack, useTheme, alpha, Container, IconButton, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PsychologyOutlined, 
  SpeedOutlined, 
  SecurityOutlined, 
  GroupsOutlined,
  CloseOutlined,
  ArrowForwardRounded,
  BlurOnRounded
} from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: "#F8FAFC", 
  overflow: "hidden",
  position: "relative",
  color: "#0F172A",
  backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
  backgroundSize: '100px 100px',
}));

const CardWrapper = styled(motion.div)(({ theme }) => ({
  position: "relative",
  height: "440px",
  borderRadius: "32px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(5),
  background: alpha("#fff", 0.7),
  backdropFilter: "blur(20px)",
  border: `1px solid ${alpha("#fff", 1)}`,
  boxShadow: `0 10px 30px -10px ${alpha("#64748B", 0.1)}`,
  overflow: "hidden",
  zIndex: 1,
  "&:hover": {
    boxShadow: `0 30px 60px -12px ${alpha("#64748B", 0.25)}`,
  }
}));

const BackgroundGlow = styled(motion.div)({
  position: "absolute",
  width: "600px",
  height: "600px",
  borderRadius: "50%",
  filter: "blur(120px)",
  zIndex: 0,
  opacity: 0.4,
});

// --- DATA ---

const coreValues = [
  { id: 0, title: "Innovation First", icon: <PsychologyOutlined />, desc: "We leverage cutting-edge AI and modern frameworks to build future-ready solutions.", color: "#007FFF" },
  { id: 1, title: "High Performance", icon: <SpeedOutlined />, desc: "Our engineered solutions are optimized for speed, scalability, and seamless UX.", color: "#007FFF" },
  { id: 2, title: "Security & Trust", icon: <SecurityOutlined />, desc: "Enterprise-grade security protocols are baked into every line of code we write.", color: "#007FFF" },
  { id: 3, title: "Collaborative Spirit", icon: <GroupsOutlined />, desc: "We work as an extension of your team to ensure alignment with business goals.", color: "#007FFF" },
];

const GbmCore = () => {
  const [focusedId, setFocusedId] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // We target the background glow inside the pseudo-element via CSS variables
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <SectionWrapper id="gbm-core">
      {/* Soft Ambient Colors */}
      <BackgroundGlow 
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }} 
        transition={{ duration: 25, repeat: Infinity }} 
        style={{ top: "-10%", left: "0%", background: alpha("#007FFF", 0.3) }} 
      />
      <BackgroundGlow 
        animate={{ x: [100, -100, 100], y: [50, -50, 50] }} 
        transition={{ duration: 20, repeat: Infinity }} 
        style={{ bottom: "0%", right: "0%", background: alpha("#6366F1", 0.2) }} 
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" sx={{ mb: 12, textAlign: "center" }}>
          <Box sx={{ 
            display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, 
            borderRadius: "100px", bgcolor: "#fff", border: `1px solid ${alpha("#64748B", 0.1)}`, 
            mb: 1, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
          }}>
            <BlurOnRounded sx={{ fontSize: 16, color: "#007FFF" }} />
            <Typography variant="overline" sx={{ color: "#64748B", fontWeight: 800, letterSpacing: 2 }}>
                CORE PRINCIPLES
            </Typography>
          </Box>
          
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "4rem" }, color: "#0F172A", letterSpacing: "-0.04em" }}>
            The GBM <span style={{ color: "#007FFF" }}>Core</span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#64748B", maxWidth: 600, fontWeight: 400, lineHeight: 1.6 }}>
            Engineering excellence delivered through a foundation of trust and precision.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {coreValues.map((core, index) => (
            <Grid item xs={12} sm={6} md={3} key={core.id}>
              <CardWrapper
                onMouseMove={handleMouseMove}
                onClick={() => setFocusedId(core.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Box sx={{ 
                  width: 64, height: 64, borderRadius: "20px", 
                  bgcolor: "#fff", border: `1px solid ${alpha(core.color, 0.1)}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: core.color, mb: 5,
                  boxShadow: `0 10px 20px -5px ${alpha(core.color, 0.2)}`
                }}>
                  {React.cloneElement(core.icon, { sx: { fontSize: 32 } })}
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#0F172A" }}>
                  {core.title}
                </Typography>
                
                <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.8, mb: 4, fontSize: '0.95rem' }}>
                  {core.desc}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: "auto", color: "#007FFF" }}>
                  <Typography variant="button" sx={{ fontWeight: 800, fontSize: "0.75rem", letterSpacing: 1 }}>Learn More</Typography>
                  <ArrowForwardRounded sx={{ fontSize: 16 }} />
                </Stack>
                
                <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", bgcolor: alpha(core.color, 0.6) }} />
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {focusedId !== null && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            sx={{
              position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: alpha("#0F172A", 0.4), backdropFilter: "blur(12px)", p: 3
            }}
            onClick={() => setFocusedId(null)}
          >
            {coreValues.filter(c => c.id === focusedId).map(core => (
              <Box
                key={`focus-${core.id}`}
                component={motion.div}
                initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  width: "100%", maxWidth: 650, bgcolor: "#fff", borderRadius: "40px",
                  p: { xs: 5, md: 8 }, position: "relative", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.2)",
                  textAlign: "center"
                }}
              >
                <IconButton onClick={() => setFocusedId(null)} sx={{ position: "absolute", top: 24, right: 24, bgcolor: "#F8FAFC" }}>
                  <CloseOutlined />
                </IconButton>

                <Box sx={{ 
                  width: 100, height: 100, borderRadius: "30px", 
                  bgcolor: alpha(core.color, 0.1), color: core.color, 
                  display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 4 
                }}>
                   {React.cloneElement(core.icon, { sx: { fontSize: 48 } })}
                </Box>

                <Typography variant="h3" sx={{ fontWeight: 900, color: "#0F172A", mb: 2 }}>{core.title}</Typography>
                <Typography variant="h6" sx={{ color: "#64748B", fontWeight: 400, lineHeight: 1.6 }}>{core.desc}</Typography>
                
                <Box sx={{ mt: 6, height: "4px", width: "100%", bgcolor: "#F1F5F9", borderRadius: 2, overflow: "hidden" }}>
                  <motion.div 
                    initial={{ x: "-100%" }} 
                    animate={{ x: "0%" }} 
                    transition={{ duration: 5, ease: "linear" }} 
                    onAnimationComplete={() => setFocusedId(null)} 
                    style={{ height: "100%", width: "100%", backgroundColor: core.color }} 
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default GbmCore; // Ensure this matches your import in ServicesPage.tsx