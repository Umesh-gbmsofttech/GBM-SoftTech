import React, { useState } from "react";
import { Box, Typography, Container, Grid, alpha, Stack, Avatar } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Groups, Science, TrendingUp, AutoAwesome } from "@mui/icons-material";
import gbmLogo from "@assets/gbm-logo.png"; // <-- Import your actual GBM logo here

// --- Keyframes for Unique Animations ---

// Slow, hypnotic pulse for the activated ring
const activeRingPulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

// Subtle "breathing" glow behind the stable logo
const stableLogoGlow = keyframes`
  0% { box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 0 10px rgba(0, 163, 224, 0.1); }
  50% { box-shadow: 0 10px 40px rgba(0,0,0,0.15), 0 0 25px rgba(0, 163, 224, 0.3); }
  100% { box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 0 10px rgba(0, 163, 224, 0.1); }
`;

// --- Styled Components ---

const PillarCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "color",
})<{ active?: boolean; color: string }>(({ theme, active, color }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: alpha("#FFFFFF", 0.95),
  backdropFilter: "blur(10px)",
  borderRadius: "30px", 
  padding: theme.spacing(1, 2, 1, 0.5),
  marginBottom: theme.spacing(3),
  boxShadow: active 
    ? `0 25px 60px ${alpha(color, 0.15)}` 
    : "0 10px 20px rgba(0,0,0,0.02)",
  border: `1px solid ${active ? color : alpha(theme.palette.divider, 0.1)}`,
  transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
  cursor: "pointer",
  position: "relative",
  zIndex: 2,
  "&:hover": {
    borderColor: color,
    transform: "translateY(-5px) translateX(3px)",
  }
}));

const NumberBadge = styled(Box)<{ color: string }>(({ color }) => ({
  width: "70px",
  height: "70px",
  minWidth: "70px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color,
  color: "#FFFFFF",
  fontSize: "22px",
  fontWeight: "900",
  marginRight: "15px",
  boxShadow: `0 8px 15px ${alpha(color, 0.3)}`,
}));

const OrbitContainer = styled(Box)({
  position: "relative",
  width: "500px",
  height: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 900px)": { display: "none" }
});

const Ring = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "size" && prop !== "color",
})<{ active?: boolean; size: number; color: string }>(({ theme, active, size, color }) => ({
  position: "absolute",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  border: `6px solid ${active ? color : alpha(color, 0.08)}`,
  transition: "border 0.6s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.6s ease",
  boxShadow: active ? `0 0 50px ${alpha(color, 0.2)}` : "none",
  // Unique Animation: Only the active ring pulses hypnotic
  animation: active ? `${activeRingPulse} 4s infinite ease-in-out` : "none",
}));

const StableLogoCore = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 5,
  backgroundColor: "#FFF",
  padding: theme.spacing(1),
  borderRadius: "50%",
  // Breathing glow animation
  animation: `${stableLogoGlow} 6s infinite ease-in-out`,
  "& img": {
    display: "block",
    transform: "none !important", // Ensures logo absolutely does not rotate
  }
}));

// --- Data ---
const culturePillars = [
  { id: "01", title: "Collaboration", color: "#00A3E0", desc: "Synergy across borders. Global perspectives solve technical puzzles.", icon: <Groups /> },
  { id: "02", title: "Innovation", color: "#FF3B30", desc: "The R&D playground. Experimenting with AI, Cloud, and the latest stacks.", icon: <Science /> },
  { id: "03", title: "Growth", color: "#4CAF50", desc: "Personalized mentorship frameworks designed to scale your career.", icon: <TrendingUp /> },
];

export const LifeAtGBM = () => {
  const [activeId, setActiveId] = useState<string | null>("01");
  const activePillar = culturePillars.find(p => p.id === activeId);

  return (
    <Box sx={{ py: 15, bgcolor: "#FFFFFF", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT SIDE: THE PILLARS */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
              <AutoAwesome sx={{ color: "primary.main", fontSize: 18 }} />
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: 2 }}>
                OUR ETHOS
              </Typography>
            </Stack>
            <Typography variant="h2" fontWeight="900" sx={{ mb: 6, letterSpacing: -2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Life at <span style={{ color: "#00A3E0" }}>GBM</span> SoftTech
            </Typography>
            
            {culturePillars.map((pillar) => (
              <PillarCard
                key={pillar.id}
                color={pillar.color}
                active={activeId === pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                onMouseLeave={() => setActiveId(pillar.id)} // Keep last one active
                whileHover={{ scale: 1.01 }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: Number(pillar.id) * 0.1, ease: [0.19, 1, 0.22, 1] }}
              >
                <NumberBadge color={pillar.color}>{pillar.id}</NumberBadge>
                <Box sx={{ flexGrow: 1, py: 1.5 }}>
                  <Typography variant="h6" fontWeight="800" sx={{ color: activeId === pillar.id ? pillar.color : "text.primary" }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: "320px", lineHeight: 1.7, fontWeight: 500, opacity: 0.9 }}>
                    {pillar.desc}
                  </Typography>
                </Box>
                <Box sx={{ 
                  color: activeId === pillar.id ? pillar.color : "text.disabled", 
                  opacity: 0.6, 
                  mr: 1 
                }}>
                  {pillar.icon}
                </Box>
              </PillarCard>
            ))}
          </Grid>

          {/* RIGHT SIDE: THE STABLE CORE & PULSING ORBIT */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <OrbitContainer>
              
              {/* Concentric Rings - Only Active One Pulses */}
              <AnimatePresence>
                {activeId && (
                  <>
                    <Ring size={450} color="#00A3E0" active={activeId === "01"} />
                    <Ring size={360} color="#FF3B30" active={activeId === "02"} />
                    <Ring size={270} color="#4CAF50" active={activeId === "03"} />
                  </>
                )}
              </AnimatePresence>

              {/* STABLE, non-rotating GBM Logo */}
              <StableLogoCore
                whileHover={{ scale: 1.05 }}
              >
                <Avatar 
                  src={gbmLogo} 
                  alt="GBM Logo" 
                  sx={{ 
                    width: 130, 
                    height: 130, 
                    // Add subtle border matching active color
                    border: `4px solid ${alpha(activePillar?.color || "#EEE", 0.15)}`,
                    transition: "border 0.5s ease"
                  }} 
                />
              </StableLogoCore>

              {/* Animated Particle Connection Lines */}
              <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', zIndex: 1 }}>
                <AnimatePresence>
                  {activeId && (
                    <motion.path
                      key={activeId}
                      d={activeId === "01" ? "M -100 120 Q 150 50 250 250" : activeId === "02" ? "M -100 250 L 250 250" : "M -100 380 Q 150 450 250 250"}
                      fill="transparent"
                      stroke={activePillar?.color}
                      strokeWidth="3"
                      strokeDasharray="8,10" // The Particles
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6, strokeDashoffset: [0, -40] }} // Moving particles
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], strokeDashoffset: { repeat: Infinity, duration: 1.5, ease: "linear" } }}
                    />
                  )}
                </AnimatePresence>
              </svg>
            </OrbitContainer>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};