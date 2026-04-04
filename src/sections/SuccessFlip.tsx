import React, { useState, useEffect } from "react";
import { Box, Typography, alpha } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Content matching your GBM brand colors
const benefits = [
  { text: "Launch Faster", color: "#00A3E0" }, // GBM Blue
  { text: "Scale Smoother", color: "#4CAF50" }, // Success Green
  { text: "Innovate Smarter", color: "#FF3B30" } // GBM Red
];

export const SuccessFlip = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 2500); // Changes every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          color: "#5F6368", 
          fontWeight: 600, 
          mb: 1,
          letterSpacing: 0.5 
        }}
      >
        GBM SoftTech Helps You
      </Typography>
      
      <Box sx={{ 
        position: 'relative', 
        height: { xs: "60px", md: "80px" }, 
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={benefits[index].text}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for "snappy" feel
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                color: benefits[index].color, 
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                display: 'inline-block',
                px: 3,
                py: 0.5,
                borderRadius: 3,
                backgroundColor: alpha(benefits[index].color, 0.05),
                border: `2px solid ${alpha(benefits[index].color, 0.15)}`,
                textShadow: `0 10px 20px ${alpha(benefits[index].color, 0.1)}`
              }}
            >
              {benefits[index].text}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};