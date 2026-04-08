// @ts-nocheck
import React from "react";
import { Box } from "@mui/material";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { ServicesHero } from "../sections/ServicesHero";

// DEFAULT IMPORTS (No curly braces)
import ServicesGrid from "../sections/ServicesGrid"; 
import GbmCore from "../sections/GbmCore"; // FIXED: Removed curly braces

// NAMED IMPORTS (Keep curly braces if these use 'export const ...')
import { GbmProcess } from "../sections/GbmProcess";
import { IndustryVerticals } from "../sections/IndustryVerticals";  
import {CTASection}  from "../sections/home/CTASection";
export const ServicesPage = () => {
  return (
    <PageTransition 
      variants={pageVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      <Box component="main">
        <ServicesHero />
        
        <ServicesGrid />
        
        <GbmCore />
        
        <IndustryVerticals />
        <GbmProcess />
        
        <CTASection/>
      </Box>
    </PageTransition>
  );
};