import React from "react";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { Hero } from "@components/sections/home/Hero";
import { TechTicker } from "../components/sections/home/TechTicker";
import { About } from "@components/sections/home/About";
import { Services } from "@components/sections/home/Services";
import { Portfolio } from "@components/sections/home/Portfolio";
import { Testimonials } from "@components/sections/home/Testimonials";
import { CTASection } from "@components/sections/home/CTASection";
import {Projects} from "@components/sections/home/Projects";
import {Contact} from "@components/sections/home/Contact";
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