import React from "react";
import { Box } from "@mui/material";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { ServicesHero } from "../sections/ServicesHero";
import { ServicesGrid } from "../sections/ServicesGrid";
import { GbmCore } from "../sections/GbmCore"; 
import { GbmProcess } from "../sections/GbmProcess";

export const ServicesPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Box>
        <ServicesHero />
        <ServicesGrid />
        <GbmCore/>
        <GbmProcess/>
        
        
      </Box>
    </PageTransition>
  );
};