import { Box } from "@mui/material";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { ContactHero } from "../sections/ContactHero";
import { ContactFormSection } from "../sections/ContactFormSection";
import { FAQSection } from "../sections/FAQSection";

export const ContactPage = () => {
  return (
    <PageTransition 
      variants={pageVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      
      <Box 
        component="main" 
        sx={{ 
          minHeight: "100vh", 
          paddingBottom: (theme) => theme.spacing(10),
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ContactHero />
        <ContactFormSection />
        <FAQSection />
      </Box>
    </PageTransition>
  );
};