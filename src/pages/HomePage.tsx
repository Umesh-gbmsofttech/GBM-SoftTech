import React from "react";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { Hero } from "../sections/home/Hero";
import { TechTicker } from "../sections/home/TechTicker";
import { About } from "../sections/home/About";
import { Services } from "../sections/home/Services";
import { Portfolio } from "../sections/home/Portfolio";
import { Testimonials } from "../sections/home/Testimonials";
import { CTASection } from "../sections/home/CTASection";
import {Projects} from "../sections/home/Projects";
import {Contact} from "../sections/home/Contact";
export const HomePage: React.FC = () => {
  return (
    <PageTransition 
      variants={pageVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      <Hero />
      
      <TechTicker />
      
      <About />
      
      <Services />
      
      <Portfolio />
      <Projects/>
      <Testimonials />
      <Contact/>
      <CTASection />
    </PageTransition>
  );
};