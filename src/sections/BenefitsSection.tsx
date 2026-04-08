// @ts-nocheck
import React, { useState } from "react";
import { Box, Typography, Container, alpha, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { 
  PaymentsOutlined, 
  HomeWorkOutlined, 
  LocalHospitalOutlined, 
  SchoolOutlined,
  LaptopMacOutlined 
} from "@mui/icons-material";

const BRAND_BLUE = "#00A3E0";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0), 
  backgroundColor: "#FFFFFF", 
  overflow: "hidden", 
  position: "relative",
  backgroundImage: `radial-gradient(${alpha('#CBD5E1', 0.2)} 1px, transparent 1px)`,
  backgroundSize: '30px 30px',
}));

const CardStackContainer = styled(Box)({
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
  height: "550px",
  width: "100%", // Takes full width of the lg=8.5 grid
  position: "relative",
  perspective: "1500px",
});

const BenefitCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "active"
})(({ theme, active }) => ({
  position: "absolute",
  // This centering logic ensures the "fan" starts from the dead center of the box
  left: "50%",
  marginLeft: "-140px", 
  width: "280px", 
  height: "400px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0px", 
  cursor: "pointer",
  zIndex: active ? 100 : 1,
  border: `1px solid ${active ? BRAND_BLUE : "#E2E8F0"}`,
  boxShadow: active 
    ? `0 40px 80px -15px ${alpha('#000', 0.15)}` 
    : `0 10px 25px -10px ${alpha('#000', 0.05)}`,
  overflow: "hidden",
}));

const perks = [
  { id: 0, title: "Global Pay", img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600", icon: <PaymentsOutlined />, desc: "Top-tier base salaries adjusted for global markets with equity potential." },
  { id: 1, title: "Hybrid Life", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600", icon: <HomeWorkOutlined />, desc: "Our culture is built on trust. Work from where you are most productive." },
  { id: 2, title: "Family Care", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600", icon: <LocalHospitalOutlined />, desc: "Premium health insurance for you and your dependents from day one." },
  { id: 3, title: "Growth Fund", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600", icon: <SchoolOutlined />, desc: "Stipends for certifications, books, and international tech summits." },
  { id: 4, title: "Elite Tech", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600", icon: <LaptopMacOutlined />, desc: "Standard-issue M3 MacBook Pros and high-end peripheral support." },
];

export const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={0} alignItems="center">
          
          <Grid item xs={12} lg={3.5}>
            <Stack spacing={2} sx={{ textAlign: { xs: 'center', lg: 'left' }, pl: { lg: 4 }, pr: { lg: 2 } }}>
              <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 950, letterSpacing: 3 }}>
                ECOSYSTEM
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#0F172A", lineHeight: 1.1, letterSpacing: -2, fontSize: { xs: '2.5rem', lg: '3.2rem' } }}>
                The <span style={{ color: BRAND_BLUE }}>Standard</span> <br />
                of Engineering.
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748B", mt: 2, fontSize: "1.1rem" }}>
                We provide a modern ecosystem so you can focus on building the future.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={8.5}>
            <CardStackContainer>
              {perks.map((perk, index) => {
                const isHovered = hoveredIndex === index;
                const total = perks.length;
                const midPoint = (total - 1) / 2;
                
                // MATH: 190px is the safe limit to keep the 5th card inside the lg=8.5 box
                const xOffset = hoveredIndex === null 
                  ? (index - midPoint) * 45 
                  : (index - midPoint) * 190; 

                const zRotation = hoveredIndex === null ? (index - midPoint) * 2 : 0;

                return (
                  <BenefitCard
                    key={perk.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, x: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.12, // SHOW ONE BY ONE EFFECT
                        duration: 0.5 
                      }
                    }}
                    viewport={{ once: true }}
                    animate={{
                      x: xOffset,
                      rotateZ: zRotation,
                      scale: isHovered ? 1.05 : 0.98,
                      opacity: hoveredIndex === null || isHovered ? 1 : 0.4,
                      y: isHovered ? -40 : 0,
                      zIndex: isHovered ? 100 : 10 + index
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20 
                    }}
                  >
                    <Box sx={{ width: "100%", height: "160px", overflow: "hidden", position: "relative" }}>
                      <motion.img 
                        src={perk.img} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <Box sx={{ position: "absolute", bottom: 0, left: 0, p: 1.2, bgcolor: BRAND_BLUE, color: "#fff" }}>
                        {React.cloneElement(perk.icon as React.ReactElement, { sx: { fontSize: 18 } })}
                      </Box>
                    </Box>

                    <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }} justifyContent="space-between">
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 900, color: BRAND_BLUE, letterSpacing: 1.5 }}>
                          0{index + 1}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: "#1E293B", mt: 0.5 }}>
                          {perk.title}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.5, fontSize: "0.85rem" }}>
                          {perk.desc}
                        </Typography>
                        <Box sx={{ 
                          width: isHovered ? "100%" : "30px", 
                          height: "3px", 
                          bgcolor: BRAND_BLUE, 
                          mt: 2,
                          transition: "0.4s ease"
                        }} />
                      </Box>
                    </Stack>
                  </BenefitCard>
                );
              })}
            </CardStackContainer>
          </Grid>

        </Grid>
      </Container>
    </SectionWrapper>
  );
};