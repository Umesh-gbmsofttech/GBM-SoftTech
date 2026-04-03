import React from "react";
import { Grid, Box } from "@mui/material";
import { Section, Container } from "@components/ui/Section";
import { ProductHero } from "../sections/ProductHero";
import { ProductItem } from "../sections/ProductItem";

export const ProductsPage = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff" }}>
      <ProductHero />

      <Section sx={{ py: 10, bgcolor: "#fcfcfc" }}>
        <Container>
          <Grid container spacing={5}>
            
            {/* Skillmate - Software/IT Training */}
            <Grid item xs={12} md={6}>
              <ProductItem 
                title="Skillmate"
                subtitle="IT Training + 100% Placement Guarantee"
                tone="#1976d2" 
                buttonText="Apply for Next Batch"
                // NEW STABLE URL: Professional Coding/Office Environment
                imageUrl="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200"
                features={[
                  "Full Stack MERN & Java Development",
                  "AWS Cloud & DevOps Mastery",
                  "1-on-1 Mentorship & Mock Interviews",
                  "Direct Referral to 200+ Hiring Partners"
                ]}
                tags={["Career Growth", "IT Training"]}
                metrics={[
                  { label: "Placed", value: "500+" },
                  { label: "Avg Hike", value: "120%" },
                  { label: "Success", value: "95%" }
                ]}
              />
            </Grid>

            {/* MyGarage - Automotive/Repair App */}
            <Grid item xs={12} md={6}>
              <ProductItem 
                title="MyGarage"
                subtitle="Vehicle Owner & Mechanic Ecosystem"
                tone="#2e7d32" 
                buttonText="Download Experience"
                // NEW STABLE URL: High-end Modern Car Workshop
                imageUrl="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1200"
                features={[
                  "Real-time Mechanic Tracking & ETA",
                  "Verified Service & Maintenance History",
                  "Transparent Spare Parts Marketplace",
                  "24/7 Roadside Emergency Assistance"
                ]}
                tags={["Automotive", "On-Demand"]}
                metrics={[
                  { label: "Downloads", value: "10k+" },
                  { label: "Mechanics", value: "850+" },
                  { label: "Response", value: "15m" }
                ]}
              />
            </Grid>

          </Grid>
        </Container>
      </Section>
    </Box>
  );
};