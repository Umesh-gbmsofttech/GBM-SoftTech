// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, useTheme, alpha, Stack } from '@mui/material';
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { 
  AgricultureOutlined, 
  SchoolOutlined, 
  ConnectingAirportsOutlined, 
  LocalShippingOutlined, 
  FavoriteBorderOutlined, 
  StorefrontOutlined, 
  DvrOutlined, 
  AccountBalanceOutlined,
  ExploreOutlined
} from '@mui/icons-material';

// --- STYLED COMPONENTS ---

const BRAND_BLUE = "#024aa8";

const RadialWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: "#f8fafc",
  position: "relative",
  overflow: "hidden",
  touchAction: "none",
}));

const MainRadialContainer = styled(motion.div)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "750px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  cursor: "grab",
  "&:active": { cursor: "grabbing" }
});

const RadarRing = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "600px",
  height: "600px",
  borderRadius: "50%",
  border: `1px solid ${alpha(BRAND_BLUE, 0.1)}`,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -20,
    borderRadius: "50%",
    border: `1px solid ${alpha(BRAND_BLUE, 0.05)}`,
  }
}));

const CentralHub = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  width: "260px",
  height: "260px",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #01357a 100%)`, 
  boxShadow: `0 30px 60px ${alpha(BRAND_BLUE, 0.4)}, inset 0 0 20px ${alpha("#fff", 0.1)}`,
  zIndex: 10,
  textAlign: "center",
  padding: theme.spacing(4),
  border: `1px solid ${alpha("#fff", 0.2)}`,
  pointerEvents: "none"
}));

const IndustryCircle = styled(motion.div, {
  shouldForwardProp: (prop) => !['accent', 'hovered'].includes(prop),
})(({ theme, accent, hovered }) => ({
  position: "absolute",
  width: "160px",
  height: "160px",
  background: alpha("#fff", 0.9),
  backdropFilter: "blur(10px)",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${hovered ? BRAND_BLUE : alpha(theme.palette.divider, 0.1)}`,
  boxShadow: hovered 
    ? `0 20px 40px ${alpha(BRAND_BLUE, 0.15)}` 
    : "0 10px 25px rgba(0,0,0,0.05)",
  zIndex: 5,
}));

const industries = [
  { id: 1, title: "Agriculture", icon: <AgricultureOutlined />, color: "#8BBD4C" },
  { id: 2, title: "Banking & Finance", icon: <AccountBalanceOutlined />, color: "#F79A16" },
  { id: 3, title: "Software & Tech", icon: <DvrOutlined />, color: "#DD5A4A" },
  { id: 4, title: "Retail & Commerce", icon: <StorefrontOutlined />, color: "#8E42A6" },
  { id: 5, title: "Life Sciences", icon: <FavoriteBorderOutlined />, color: "#6739A9" },
  { id: 6, title: "Logistics", icon: <LocalShippingOutlined />, color: "#5086EF" },
  { id: 7, title: "Travel & Leisure", icon: <ConnectingAirportsOutlined />, color: "#2EB9B1" },
  { id: 8, title: "Education", icon: <SchoolOutlined />, color: "#549839" },
];

export const IndustryVerticals = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const rotateX = useMotionValue(0);
  const smoothRotate = useSpring(rotateX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (hoveredIndex !== null || isDragging) return;
    
    const controls = animate(rotateX, rotateX.get() + 360, {
      duration: 60,
      ease: "linear",
      repeat: Infinity
    });
    return controls.stop;
  }, [hoveredIndex, isDragging, rotateX]);

  const radius = 300;
  const totalItems = industries.length;

  return (
    <RadialWrapper>
      <Container maxWidth="lg">
        <Stack spacing={1} alignItems="center" sx={{ mb: 4, textAlign: "center", position: 'relative', zIndex: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, px: 2, py: 0.5, 
            borderRadius: "100px", 
            bgcolor: alpha(BRAND_BLUE, 0.05), 
            border: `1px solid ${alpha(BRAND_BLUE, 0.1)}`, 
            mb: 1 
          }}>
            <ExploreOutlined sx={{ fontSize: 16, color: BRAND_BLUE }} />
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 2 }}>GLOBAL IMPACT</Typography>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.8rem' }, color: "#0f172a" }}>
            Industries We <span style={{ color: BRAND_BLUE }}>Power</span>
          </Typography>
        </Stack>

        <MainRadialContainer
          drag="x"
          style={{ rotate: smoothRotate }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={(e, info) => {
            rotateX.set(rotateX.get() + info.delta.x * 0.4);
          }}
        >
          <RadarRing />

          <CentralHub
            style={{ rotate: useTransform(smoothRotate, (r) => -r) }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: "#ffffff", // Explicit white
                opacity: 0.9, 
                letterSpacing: 3, 
                mb: 1, 
                fontWeight: 700 
              }}
            >
              ECOSYSTEM
            </Typography>
            <Typography 
              variant="h4" 
              fontWeight="900" 
              sx={{ 
                lineHeight: 1.1,
                color: "#ffffff", // Explicit white
                textShadow: '0 2px 10px rgba(0,0,0,0.1)' 
              }}
            >
              {hoveredIndex !== null ? industries[hoveredIndex].title : "Vertical Focus"}
            </Typography>
            <Box sx={{ mt: 2, width: 40, height: 2, bgcolor: "#fff", borderRadius: 2, opacity: 0.6 }} />
          </CentralHub>

          {industries.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const angle = (index / totalItems) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <IndustryCircle
                key={item.id}
                accent={item.color}
                hovered={isHovered}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  x, y,
                  rotate: useTransform(smoothRotate, (r) => -r) 
                }}
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  borderWidth: isHovered ? 2 : 1,
                  borderColor: isHovered ? BRAND_BLUE : alpha(theme.palette.divider, 0.1),
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Connecting Line to Center */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: radius, height: '1.5px',
                    background: `linear-gradient(90deg, ${alpha(BRAND_BLUE, 0.3)} 0%, transparent 100%)`,
                    transformOrigin: 'left center',
                    transform: `rotate(${angle * (180 / Math.PI) + 180}deg)`,
                    zIndex: -1,
                    opacity: isHovered ? 1 : 0.1,
                    transition: 'opacity 0.3s, background 0.3s'
                  }} 
                />

                <Box sx={{ 
                  width: 54, height: 54, borderRadius: '16px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1,
                  bgcolor: isHovered ? alpha(BRAND_BLUE, 0.05) : alpha(item.color, 0.08), 
                  color: isHovered ? BRAND_BLUE : item.color,
                  boxShadow: isHovered ? `0 10px 20px ${alpha(BRAND_BLUE, 0.1)}` : 'none',
                  transition: 'all 0.3s'
                }}>
                  {React.cloneElement(item.icon as React.ReactElement, { sx: { fontSize: 30 } })}
                </Box>
                
                <Typography 
                  variant="caption" 
                  fontWeight="800" 
                  sx={{ 
                    color: isHovered ? BRAND_BLUE : '#475569', 
                    textAlign: 'center', 
                    px: 2, 
                    textTransform: 'uppercase', 
                    letterSpacing: 0.5,
                    transition: 'color 0.3s'
                  }}
                >
                  {item.title}
                </Typography>
              </IndustryCircle>
            );
          })}
        </MainRadialContainer>
      </Container>
    </RadialWrapper>
  );
};

export default IndustryVerticals;