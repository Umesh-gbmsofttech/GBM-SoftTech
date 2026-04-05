// @ts-nocheck
import React from "react";
import { Box, Typography, styled, alpha, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForwardOutlined, NorthEastOutlined } from "@mui/icons-material";

// --- INTERFACES ---

interface Project {
  name: string;
  tag: string;
  image: string;
  desc: string;
}

// --- STYLED COMPONENTS ---

/**
 * FIX: Using motion.create() instead of wrapping the component in motion().
 * This simplifies the type union and resolves the TS2590 error.
 */
const ProjectContainer = styled(motion.create("div"))(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: 0,
  overflow: "hidden",
  border: `1px solid ${alpha("#001e29", 0.08)}`,
  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  cursor: "pointer",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-12px)",
    boxShadow: `0 40px 80px ${alpha("#001e29", 0.1)}`,
    "& .project-image": { 
      transform: "scale(1.1)", 
      filter: "grayscale(0%)" 
    },
    "& .project-overlay": { opacity: 1 },
    "& .action-icon": { transform: "rotate(0deg) scale(1)", opacity: 1 }
  }
}));

const ImageWrapper = styled(Box)({
  position: "relative",
  height: 380,
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#001e29",
  "& .project-image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease",
    opacity: 0.9,
    filter: "grayscale(100%)"
  }
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: alpha(theme.palette.primary.main, 0.85),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "all 0.4s ease",
  zIndex: 2
}));

const ProjectsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

// --- DATA ---

const projects: Project[] = [
  { 
    name: "E-commerce Platform", 
    tag: "RETAIL ARCHITECTURE", 
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000", 
    desc: "Headless commerce environments engineered for global distribution and 99.9% uptime." 
  },
  { 
    name: "Health-Tech Systems", 
    tag: "MOBILE BIOMETRICS", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000", 
    desc: "Real-time vitals monitoring systems built on high-performance HIPAA-compliant architecture." 
  },
  { 
    name: "Enterprise Intelligence", 
    tag: "DATA VISUALIZATION", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000", 
    desc: "Transforming multi-layered business logic into intuitive, high-speed dashboard interfaces." 
  }
];

// --- MAIN COMPONENT ---

export const Portfolio: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <div style={{ marginBottom: "80px" }}>
          <Typography 
            variant="overline" 
            sx={{ fontWeight: 900, letterSpacing: 4, color: "primary.main", mb: 1, display: "block" }}
          >
            SELECTED WORK
          </Typography>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent="space-between" 
            alignItems="flex-end" 
            spacing={2}
          >
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 900, fontSize: { xs: "2.8rem", md: "4rem" }, color: "#001e29", letterSpacing: "-0.04em", lineHeight: 1 }}
            >
              Engineering <Box component="span" sx={{ color: alpha("#001e29", 0.15) }}>Impact.</Box>
            </Typography>
            <Button 
              endIcon={<ArrowForwardOutlined />} 
              sx={{ fontWeight: 800, color: "#001e29", px: 0, "&:hover": { bgcolor: "transparent", color: "primary.main" } }}
            >
              Full Archive
            </Button>
          </Stack>
        </div>

        <ProjectsGrid>
          {projects.map((item, i) => (
            <ProjectContainer 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }}
            >
              <ImageWrapper>
                <ProjectOverlay className="project-overlay">
                  <NorthEastOutlined 
                    className="action-icon" 
                    sx={{ 
                      color: "#fff", 
                      fontSize: "3rem", 
                      transform: "rotate(-45deg) scale(0.8)", 
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
                    }} 
                  />
                </ProjectOverlay>
                <img className="project-image" src={item.image} alt={item.name} />
              </ImageWrapper>
              
              <div style={{ padding: "32px" }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#00A3E0" }} />
                  <Typography variant="caption" sx={{ fontWeight: 900, color: alpha("#001e29", 0.4), letterSpacing: 2 }}>
                    {item.tag}
                  </Typography>
                </Stack>
                <Typography variant="h5" sx={{ fontWeight: 900, color: "#001e29", mb: 2 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: alpha("#001e29", 0.6), fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </div>
            </ProjectContainer>
          ))}
        </ProjectsGrid>
      </Container>
    </Box>
  );
};
