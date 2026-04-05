// @ts-nocheck
import React from "react";
import { Box, Typography, alpha, styled } from "@mui/material";
import { motion } from "framer-motion";

const TickerWrapper = styled(Box)(({ theme }) => ({
  background: "#ffffff", 
  padding: theme.spacing(3, 0), 
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
  zIndex: 5,
  boxShadow: `0 10px 30px ${alpha("#000", 0.02)}`, // Lighter shadow for cleaner concave look
  
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: "200px",
    height: "100%",
    zIndex: 2,
    pointerEvents: "none",
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, #ffffff 30%, transparent)",
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, #ffffff 30%, transparent)",
  }
}));

const techStack: string[] = [
  "REACT", "NODE.JS", "TYPESCRIPT", "AWS", "DOCKER", 
  "KUBERNETES", "PYTHON", "GOLANG", "FRAMER MOTION", "MUI"
];

// Animation variants for the initial staggered entrance
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const TechTicker: React.FC = () => {
  return (
    <TickerWrapper
      component={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.1 // Staggered entrance for each tech label
          }
        }
      }}
    >
      <motion.div
        animate={{ x: "-50%" }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          gap: "100px",
          paddingRight: "100px",
          width: "fit-content",
          alignItems: "center"
        }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <Box 
            key={i} 
            component={motion.div}
            variants={itemVariants}
            sx={{ position: "relative" }}
          >
            <Typography
              variant="h6"
              component={motion.span}
              whileHover={{ 
                scale: 1.15,
                color: "#04bd60", // Your preferred green
              }}
              sx={{
                color: alpha("#024aa8", 0.6), // Softened default blue for premium look
                fontWeight: 900,
                letterSpacing: 6,
                fontSize: { xs: "0.75rem", md: "0.9rem" },
                transition: "color 0.4s ease",
                cursor: "default",
                display: "inline-block",
                "&:hover": {
                  textShadow: `0 0 15px ${alpha("#04bd60", 0.3)}`,
                }
              }}
            >
              {tech}
            </Typography>
            
            <Box 
              sx={{ 
                position: "absolute", 
                right: "-50px", 
                top: "50%", 
                width: "20px", 
                height: "1px", 
                bgcolor: alpha("#001e29", 0.08),
                transform: "translateY(-50%)",
              }} 
            />
          </Box>
        ))}
      </motion.div>
    </TickerWrapper>
  );
};
