// @ts-nocheck
import React from "react";
import { Box, Typography, alpha, styled } from "@mui/material";
import { motion } from "framer-motion";

/**
 * TickerWrapper: Using a semi-translucent background with backdrop-filter 
 * to bridge the gap between the dark Hero and light About sections.
 */
const TickerWrapper = styled(Box)(({ theme }) => ({
  background: alpha("#001e29", 0.95),
  backdropFilter: "blur(10px)",
  padding: theme.spacing(2, 0), 
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  borderTop: `1px solid ${alpha("#fff", 0.03)}`,
  borderBottom: `1px solid ${alpha("#fff", 0.03)}`,
  position: "relative",
  zIndex: 10,
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: "150px",
    height: "100%",
    zIndex: 2,
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, #001e29, transparent)",
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, #001e29, transparent)",
  }
}));

const stack: string[] = [
  "REACT", 
  "NODE.JS", 
  "TYPESCRIPT", 
  "AWS", 
  "DOCKER", 
  "KUBERNETES", 
  "PYTHON", 
  "GOLANG"
];

export const TechTicker: React.FC = () => {
  return (
    <TickerWrapper>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 25,
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
        {/* Double mapping for a seamless infinite loop */}
        {[...stack, ...stack].map((tech, i) => (
          <Typography
            key={i}
            variant="h6"
            sx={{
              color: alpha("#fff", 0.3),
              fontWeight: 900,
              letterSpacing: 8,
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.main",
              }
            }}
          >
            {tech}
          </Typography>
        ))}
      </motion.div>
    </TickerWrapper>
  );
};
