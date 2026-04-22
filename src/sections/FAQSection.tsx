// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Container, alpha, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Add, Remove, ChevronRight } from "@mui/icons-material";

// --- Styled Components ---

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: "#FFFFFF",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `radial-gradient(circle at 90% 10%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 40%)`,
    pointerEvents: "none",
  }
}));

const AccordionItem = styled(motion.div)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  overflow: "hidden",
}));

const QuestionHeader = styled(motion.div)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(3, 0),
  cursor: "pointer",
  gap: theme.spacing(2),
}));

const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: active ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.05),
  color: active ? "#FFFFFF" : theme.palette.primary.main,
  transition: "all 0.3s ease",
}));

// --- Component ---

export const FAQSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    { 
      q: "What is your typical project commencement timeline?", 
      a: "Depending on resource availability, we typically begin the discovery phase within 7-10 business days of contract signing." 
    },
    { 
      q: "How do you handle post-deployment scalability?", 
      a: "Our architectures are 'Cloud-First'. We utilize auto-scaling groups and serverless functions to ensure your app handles traffic spikes effortlessly." 
    },
    { 
      q: "Can you integrate with our existing legacy systems?", 
      a: "Yes. We specialize in building custom API wrappers and middleware that bridge the gap between modern frontends and legacy backends." 
    },
    { 
      q: "Who owns the Intellectual Property (IP) of the code?", 
      a: "Upon final payment, 100% of the Intellectual Property and source code ownership is transferred to your organization." 
    }
  ];

  return (
    <SectionWrapper id="faq">
      <Container>
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={{ xs: 6, md: 10 }}
          alignItems="flex-start"
        >
          {/* Left Column */}
          <div style={{ flex: 1, position: "sticky", top: "100px" }}>
            <Typography 
              variant="overline" 
              sx={{ color: "primary.main", fontWeight: 800, letterSpacing: 2 }}
            >
              Support Center
            </Typography>

            <Typography variant="h2" fontWeight="900" sx={{ mt: 2, mb: 3, letterSpacing: -1.5 }}>
              Expert Answers to Your Questions
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
              Can't find what you're looking for? Our strategy team is available for a deep-dive consultation regarding your specific project needs.
            </Typography>

            <Button 
              variant="outlined" 
              endIcon={<ChevronRight />}
              sx={{ borderRadius: 99, px: 4, py: 1.5, fontWeight: 700 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // ✅ ADDED
            >
              Contact Support
            </Button>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1.2, width: "100%" }}>
            {faqs.map((item, index) => {
              const isOpen = expanded === index;

              return (
                <AccordionItem key={index}>
                  <QuestionHeader
                    onClick={() => setExpanded(isOpen ? null : index)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Typography 
                      variant="h6" 
                      fontWeight="750" 
                      sx={{ 
                        color: isOpen ? "text.primary" : "text.secondary",
                        fontSize: "1.2rem",
                        transition: "color 0.3s ease" 
                      }}
                    >
                      {item.q}
                    </Typography>

                    <IconWrapper active={isOpen}>
                      {isOpen ? <Remove fontSize="small" /> : <Add fontSize="small" />}
                    </IconWrapper>
                  </QuestionHeader>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <div style={{ paddingBottom: "32px", paddingRight: "40px" }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: "text.secondary", 
                              lineHeight: 1.9, 
                              fontSize: "1.05rem",
                              fontWeight: 450 
                            }}
                          >
                            {item.a}
                          </Typography>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              );
            })}
          </div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
};