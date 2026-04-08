// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Container, Grid, alpha, Stack, Avatar } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Groups, Science, TrendingUp, AutoAwesome } from "@mui/icons-material";
import gbmLogo from "@assets/gbm-logo.png";

// --- Keyframes ---

const activeRingPulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.04); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const stableLogoGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(0, 163, 224, 0.1); }
  50% { box-shadow: 0 0 40px rgba(0, 163, 224, 0.2); }
  100% { box-shadow: 0 0 20px rgba(0, 163, 224, 0.1); }
`;

// --- Styled Components ---

const PillarCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "color",
})<{ active?: boolean; color: string }>(({ theme, active, color }) => ({
  display: "flex",
  alignItems: "center",
  // Instead of a heavy white box, we use transparency or a light blur
  backgroundColor: active ? alpha("#FFFFFF", 0.7) : "transparent",
  backdropFilter: active ? "blur(10px)" : "none",
  borderRadius: "24px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  // Border only appears or brightens when active
  border: `1px solid ${active ? color : "transparent"}`,
  boxShadow: active 
    ? `0 20px 40px ${alpha(color, 0.08)}` 
    : "none",
  transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
  cursor: "pointer",
  position: "relative",
  zIndex: 2,
  "&:hover": {
    backgroundColor: active ? alpha("#FFFFFF", 0.8) : alpha(color, 0.03),
    transform: "translateX(8px)",
  }
}));

const IconBadge = styled(Box)<{ color: string; active: boolean }>(({ color, active }) => ({
  width: "56px",
  height: "56px",
  minWidth: "56px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: active ? color : alpha(color, 0.1),
  color: active ? "#FFFFFF" : color,
  fontSize: "24px",
  marginRight: "20px",
  transition: "all 0.3s ease",
  boxShadow: active ? `0 8px 16px ${alpha(color, 0.2)}` : "none",
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
})<{ active?: boolean; size: number; color: string }>(({ active, size, color }) => ({
  position: "absolute",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  border: `1.5px solid ${active ? color : alpha(color, 0.08)}`,
  transition: "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
  animation: active ? `${activeRingPulse} 5s infinite ease-in-out` : "none",
}));

const StableLogoCore = styled(motion.div)(({ theme }) => ({
  position: "relative",
  zIndex: 5,
  backgroundColor: "#FFF",
  padding: theme.spacing(1),
  borderRadius: "50%",
  animation: `${stableLogoGlow} 6s infinite ease-in-out`,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
}));

// --- Data ---
const culturePillars = [
  { id: "01", title: "Global Collaboration", color: "#00A3E0", desc: "Synergy across borders. Global perspectives solve technical puzzles.", icon: <Groups /> },
  { id: "02", title: "Next-Gen Innovation", color: "#FF3B30", desc: "The R&D playground. Experimenting with AI, Cloud, and the latest stacks.", icon: <Science /> },
  { id: "03", title: "Personalized Growth", color: "#4CAF50", desc: "Mentorship frameworks designed to scale your technical mastery.", icon: <TrendingUp /> },
];

export const LifeAtGBM = () => {
  const [activeId, setActiveId] = useState<string>("01");
  const activePillar = culturePillars.find(p => p.id === activeId) || culturePillars[0];

  return (
    <Box sx={{ 
      py: { xs: 10, md: 15 }, 
      bgcolor: "#FFFFFF", 
      overflow: "hidden", 
      position: "relative" 
    }}>
      
      {/* Background Adaptive Aura - Creates depth without a container box */}
      <motion.div 
        animate={{ 
          background: `radial-gradient(circle at 80% 50%, ${alpha(activePillar.color, 0.07)} 0%, transparent 50%)` 
        }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <AutoAwesome sx={{ color: activePillar.color, fontSize: 18, transition: "color 0.5s ease" }} />
              <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 800, letterSpacing: 2.5 }}>
                OUR ETHOS
              </Typography>
            </Stack>
            
            <Typography variant="h2" fontWeight="900" sx={{ mb: 6, letterSpacing: -2, fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.1 }}>
              Life at <span style={{ color: "#00A3E0" }}>GBM</span> SoftTech
            </Typography>
            
            <Stack spacing={1}>
              {culturePillars.map((pillar) => (
                <PillarCard
                  key={pillar.id}
                  color={pillar.color}
                  active={activeId === pillar.id}
                  onMouseEnter={() => setActiveId(pillar.id)}
                  whileHover={{ x: 5 }}
                >
                  <IconBadge color={pillar.color} active={activeId === pillar.id}>
                    {pillar.icon}
                  </IconBadge>
                  
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="800" sx={{ color: activeId === pillar.id ? pillar.color : "#1A1A1A", transition: "color 0.3s" }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: "340px", lineHeight: 1.6, opacity: 0.8 }}>
                      {pillar.desc}
                    </Typography>
                  </Box>
                </PillarCard>
              ))}
            </Stack>
          </Grid>

          {/* RIGHT VISUAL */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <OrbitContainer>
              
              <AnimatePresence>
                <Ring size={460} color="#00A3E0" active={activeId === "01"} />
                <Ring size={360} color="#FF3B30" active={activeId === "02"} />
                <Ring size={260} color="#4CAF50" active={activeId === "03"} />
              </AnimatePresence>

              <StableLogoCore whileHover={{ scale: 1.05 }}>
                <Avatar 
                  src={gbmLogo} 
                  alt="GBM" 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    border: `2px solid ${alpha(activePillar.color, 0.1)}`,
                    transition: "border 0.5s ease",
                    p: 1,
                    bgcolor: "#FFF"
                  }} 
                />
              </StableLogoCore>

              {/* Particle Stream */}
              <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none' }}>
                <AnimatePresence mode="wait">
                  <motion.path
                    key={activeId}
                    d={activeId === "01" ? "M -80 140 Q 180 80 250 250" : activeId === "02" ? "M -80 250 L 250 250" : "M -80 360 Q 180 420 250 250"}
                    fill="transparent"
                    stroke={activePillar.color}
                    strokeWidth="2"
                    strokeDasharray="6,12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3, strokeDashoffset: [0, -40] }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      pathLength: { duration: 0.6 },
                      strokeDashoffset: { repeat: Infinity, duration: 1.5, ease: "linear" } 
                    }}
                  />
                </AnimatePresence>
              </svg>
            </OrbitContainer>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};