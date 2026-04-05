// @ts-nocheck
import React, { useState } from "react";
import { Box, Typography, Container, alpha, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { 
  PaymentsOutlined, 
  HomeWorkOutlined, 
  LocalHospitalOutlined, 
  SchoolOutlined,
  LaptopMacOutlined 
} from "@mui/icons-material";

// --- Styled Components ---

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  // Soft, friendly light-blue/grey background
  backgroundColor: "#F8FAFC", 
  overflow: "hidden",
  position: "relative",
}));

const CardStackContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  perspective: "1500px",
  height: "500px",
  width: "100%",
  position: "relative",
});

const BenefitCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active: boolean }>(({ theme, active }) => ({
  position: "absolute",
  width: "280px",
  height: "400px",
  // Clean White Card
  backgroundColor: "#FFFFFF",
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  borderRadius: 0, // Strictly Sharp as per your brand
  cursor: "pointer",
  zIndex: active ? 50 : 1,
  // High-end, soft shadow instead of a "glow"
  boxShadow: active 
    ? `0 30px 60px ${alpha(theme.palette.common.black, 0.1)}` 
    : `0 4px 20px ${alpha(theme.palette.common.black, 0.03)}`,
  border: `1px solid ${active ? theme.palette.primary.main : alpha(theme.palette.divider, 0.1)}`,
  transition: "border 0.4s ease",
}));

const CardNumber = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 900,
  color: alpha(theme.palette.text.secondary, 0.3),
  marginBottom: theme.spacing(2),
}));

// --- Data ---

const perks = [
  { id: 0, title: "Global Pay", icon: <PaymentsOutlined />, desc: "Top-tier base pay with performance bonuses and localized equity options." },
  { id: 1, title: "Hybrid Life", icon: <HomeWorkOutlined />, desc: "Choose your workspace. We prioritize high-impact output over clock-in times." },
  { id: 2, title: "Family Care", icon: <LocalHospitalOutlined />, desc: "Comprehensive medical suite for you and your family with mental health support." },
  { id: 3, title: "Growth Fund", icon: <SchoolOutlined />, desc: "Annual $1,000 budget for global certifications and international workshops." },
  { id: 4, title: "Elite Tech", icon: <LaptopMacOutlined />, desc: "A custom-specced MacBook Pro or workstation delivered to your doorstep." },
];

export const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper>
      {/* Soft Decorative Background Blur */}
      <Box sx={{ 
        position: "absolute", top: "20%", left: "10%", 
        width: "400px", height: "400px", 
        background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 70%)`,
        pointerEvents: "none"
      }} />

      <Container>
        <Stack spacing={1} sx={{ mb: 8, textAlign: "center", alignItems: "center" }}>
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: 2 }}>
            PERKS & BENEFITS
          </Typography>
          <Typography variant="h3" fontWeight="900" sx={{ letterSpacing: -1.5 }}>
            Designed for <span style={{ color: "#00A3E0" }}>Your Success</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
            We provide the infrastructure so you can focus on building the future.
          </Typography>
        </Stack>

        <CardStackContainer>
          {perks.map((perk, index) => {
            const isHovered = hoveredIndex === index;
            const total = perks.length;
            const mid = (total - 1) / 2;
            
            // MATH: Slower, more "friendly" spread
            const xOffset = hoveredIndex === null 
              ? (index - mid) * 40  
              : (index - hoveredIndex) * 290; 

            // MATH: Subtle rotation for that "Fan" look
            const rotation = hoveredIndex === null ? (index - mid) * 5 : 0;

            return (
              <BenefitCard
                key={perk.id}
                active={isHovered}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  x: xOffset,
                  rotateZ: rotation,
                  scale: isHovered ? 1.05 : 0.95,
                  // Dim non-hovered cards gently (0.4 instead of invisible)
                  opacity: hoveredIndex === null || isHovered ? 1 : 0.5,
                  y: isHovered ? -20 : 0
                }}
                // SPEED CHECK: Slower stiffness (100) and higher damping (30) makes it "silk-smooth"
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 25, 
                  mass: 1 
                }}
              >
                <Box>
                  <CardNumber>0{index + 1}</CardNumber>
                  <Box sx={{ color: isHovered ? "primary.main" : "text.secondary", mb: 2, transition: "0.3s" }}>
                    {React.cloneElement(perk.icon as React.ReactElement, { sx: { fontSize: 32 } })}
                  </Box>
                  <Typography variant="h5" fontWeight="900" color="text.primary" sx={{ letterSpacing: -0.5 }}>
                    {perk.title}
                  </Typography>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      opacity: isHovered ? 1 : 0, 
                      transition: "0.4s", 
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      // Prevents text from being "selectable" when hidden
                      visibility: isHovered ? 'visible' : 'hidden' 
                    }}
                  >
                    {perk.desc}
                  </Typography>
                  <Box sx={{ 
                    width: isHovered ? "100%" : "0%", 
                    height: "3px", 
                    bgcolor: "primary.main", 
                    mt: 3,
                    transition: "0.6s ease" 
                  }} />
                </Box>
              </BenefitCard>
            );
          })}
        </CardStackContainer>

        <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
           <Typography variant="caption" sx={{ fontWeight: 700, color: "text.disabled", letterSpacing: 1 }}>
              EXPLORE OUR GLOBAL ECOSYSTEM 
           </Typography>
        </Stack>
      </Container>
    </SectionWrapper>
  );
};
