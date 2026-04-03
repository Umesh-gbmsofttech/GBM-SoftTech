import React from "react";
import { Container } from "@mui/material";
import { Section } from "@components/ui/Section";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";

// Importing the sections
import { CareerHero } from "../sections/CareerHero";
import { OpenPositions } from "../sections/OpenPositions";
import { LifeAtGBM } from "../sections/LifeAtGBM";
import { BenefitsSection } from "../sections/BenefitsSection";
import { JoinUsForm } from "../sections/JoinUsForm";

export const CareersPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <CareerHero />
          <OpenPositions />
          <LifeAtGBM />
        </Container>
      </Section>
      <BenefitsSection />
      <JoinUsForm />
    </PageTransition>
  );
};