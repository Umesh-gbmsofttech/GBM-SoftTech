import React from "react";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { 
  AboutHero, 
  WhyChooseUs, 
  Vision,
  Process,
  Products
<<<<<<< HEAD
} from "../components/sections/about";
=======
} from "../sections/about";
>>>>>>> shriram

export const AboutPage: React.FC = () => {
  return (
    <PageTransition 
      variants={pageVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      {/* 1. Impactful Entrance */}
      <AboutHero />
      <WhyChooseUs />
      
      <Process/>
      <Vision/>

    
      <Products/>
      {/* 7. Conversion */}
    </PageTransition>
  );
};