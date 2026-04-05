// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, useTheme, alpha, Container, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PsychologyOutlined, 
  SpeedOutlined, 
  SecurityOutlined, 
  GroupsOutlined,
  CloseOutlined 
} from "@mui/icons-material";

const MotionBox = motion.create ? motion.create(Box) : motion.div;

// --- STYLED COMPONENTS ---

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: "#f8fafc",
  overflow: "hidden",
  position: "relative",
}));

const CardFanContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  perspective: "1200px",
  height: "500px",
  width: "100%",
  position: "relative",
  marginTop: "50px",
});

const CoreCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isFocused"
})<{ isFocused: boolean }>(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "420px",
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  borderRadius: "24px", // Matches your Core look but keeps the Benefit behavior
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  background: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
}));

// --- DATA ---

const coreValues = [
  { id: 0, title: "Innovation First", icon: <PsychologyOutlined fontSize="large" />, desc: "We leverage cutting-edge AI and modern frameworks to build future-ready solutions that redefine industry standards." },
  { id: 1, title: "High Performance", icon: <SpeedOutlined fontSize="large" />, desc: "Our engineered solutions are optimized for speed, scalability, and seamless UX across all devices and platforms." },
  { id: 2, title: "Security & Trust", icon: <SecurityOutlined fontSize="large" />, desc: "Enterprise-grade security protocols are baked into every line of code we write, ensuring your data remains yours." },
  { id: 3, title: "Collaborative Spirit", icon: <GroupsOutlined fontSize="large" />, desc: "We work as an extension of your team to ensure alignment with business goals and transparent communication." },
];

export const GbmCore = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedId, setFocusedId] = useState<number | null>(null);

  // Auto-close focused card after 4 seconds
  useEffect(() => {
    if (focusedId !== null) {
      const timer = setTimeout(() => setFocusedId(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [focusedId]);

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h2" fontWeight="900" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" } }}>
            The GBM <Box component="span" sx={{ color: theme.palette.primary.main }}>Core</Box>
          </Typography>
        </Stack>

        <CardFanContainer>
          {coreValues.map((core, index) => {
            const isHovered = hoveredIndex === index;
            const total = coreValues.length;
            const mid = (total - 1) / 2;

            // ANIMATION MATH (Fan Logic)
            // When not hovered: cards are stacked slightly overlapping
            // When hovered: they spread out wide
            const xOffset = hoveredIndex === null 
              ? (index - mid) * 60 
              : (index - hoveredIndex) * 320; 

            const rotation = hoveredIndex === null ? (index - mid) * 8 : 0;

            return (
              <CoreCard
                key={core.id}
                isFocused={false}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setFocusedId(core.id)}
                animate={{
                  x: xOffset,
                  rotateZ: rotation,
                  scale: isHovered ? 1.05 : 0.95,
                  opacity: hoveredIndex === null || isHovered ? 1 : 0.6,
                  y: isHovered ? -30 : 0,
                  zIndex: isHovered ? 100 : index
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <IconWrapper>{core.icon}</IconWrapper>
                <Typography variant="h5" fontWeight="800" sx={{ mb: 2 }}>{core.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {core.desc.substring(0, 100)}...
                </Typography>
                
                {/* Visual Indicator */}
                <div style={{ marginTop: 'auto', paddingTop: "16px" }}>
                    <Typography variant="caption" fontWeight="bold" color="primary">
                        CLICK TO EXPAND
                    </Typography>
                </div>
              </CoreCard>
            );
          })}
        </CardFanContainer>
      </Container>

      {/* --- FULL SCREEN FOCUS POPUP (Remains as requested) --- */}
      <AnimatePresence>
        {focusedId !== null && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: alpha("#001e29", 0.95),
              backdropFilter: "blur(15px)",
              p: 3
            }}
            onClick={() => setFocusedId(null)}
          >
            {coreValues.filter(c => c.id === focusedId).map(core => (
              <MotionBox
                key={`focus-${core.id}`}
                initial={{ scale: 0.5, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  backgroundColor: "#fff",
                  borderRadius: "32px",
                  p: { xs: 4, md: 8 },
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
                }}
              >
                <IconButton 
                  onClick={() => setFocusedId(null)}
                  sx={{ position: "absolute", top: 20, right: 20 }}
                >
                  <CloseOutlined />
                </IconButton>

                <div style={{ color: theme.palette.primary.main, marginBottom: "32px" }}>
                    {React.cloneElement(core.icon as React.ReactElement, { sx: { fontSize: 80 } })}
                </div>
                
                <Typography variant="h3" fontWeight="900" sx={{ mb: 3, color: "#001e29" }}>
                  {core.title}
                </Typography>
                
                <Typography variant="h6" sx={{ color: "text.secondary", lineHeight: 1.8, fontWeight: 400 }}>
                  {core.desc}
                </Typography>

                {/* Progress Bar Timer */}
                <div style={{ width: "100%", height: "6px", backgroundColor: "#eee", marginTop: "48px", borderRadius: "12px", overflow: "hidden" }}>
                  <Box
                    component={motion.div}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    sx={{ height: "100%", backgroundColor: theme.palette.primary.main }}
                  />
                </div>
              </MotionBox>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
