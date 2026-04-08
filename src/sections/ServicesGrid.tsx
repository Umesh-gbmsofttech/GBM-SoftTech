// @ts-nocheck
import { useState } from "react";
import { Typography, Box, Stack, Grid, alpha, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "@components/ui/Section";
import { MutedText } from "@components/ui/StyledCard";
import { Send } from "@mui/icons-material";
import ContactPopup from "./ContactPopup"; // Ensure this matches your file name

// --- CONSTANTS ---
const BRAND_BLUE = "#024aa8";

// --- DATA ---
const services = [
  { 
    id: 0,
    title: "Website Development", 
    desc: "We build high-performance web applications using React and Next.js. Our solutions focus on speed, SEO, and flawless user journeys.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 1,
    title: "Mobile App Development", 
    desc: "Reach your audience anywhere with native-quality mobile apps specialized in cross-platform development for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 2,
    title: "Digital Marketing", 
    desc: "Grow your digital footprint with precision. From SEO strategy to PPC, we use data to ensure your brand reaches the right people.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 3,
    title: "Customized Solutions", 
    desc: "Bespoke software solutions tailored to your specific workflow, automating complex tasks and boosting operational efficiency.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 4,
    title: "Software Consulting", 
    desc: "Leverage our expertise to navigate the tech landscape. We provide strategic roadmaps and architecture reviews to future-proof your business.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 5,
    title: "Maintenance & Support", 
    desc: "Peace of mind with 24/7 monitoring, regular updates, and instant troubleshooting to keep your systems running at peak performance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
  }
];

// --- STYLED COMPONENTS ---
const ServiceIconCard = styled(motion.div, {
  // This prevents the 'active' prop from being passed to the DOM element
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  padding: theme.spacing(2),
  borderRadius: "24px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  background: active ? alpha(BRAND_BLUE, 0.05) : theme.palette.background.paper,
  border: `2.5px solid ${active ? BRAND_BLUE : alpha(theme.palette.divider, 0.08)}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: active ? `0 15px 35px ${alpha(BRAND_BLUE, 0.12)}` : "0 4px 12px rgba(0,0,0,0.03)",
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: BRAND_BLUE, 
    background: alpha(BRAND_BLUE, 0.02),
  },
}));

export const ServicesGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  
  const activeService = services[activeIndex]; 

  return (
    <Section sx={{ py: 12 }}>
      <Container>
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography variant="h2" fontWeight="900" gutterBottom sx={{ letterSpacing: -1 }}>
            Our <Box component="span" sx={{ color: BRAND_BLUE }}>Core Services</Box>
          </Typography>
          <MutedText variant="h6" sx={{ maxWidth: 700, mx: 'auto' }}>
            Empowering your business with cutting-edge technology and data-driven strategies.
          </MutedText>
        </Box>

        <Grid container spacing={8} alignItems="center">
          {/* Detail Panel */}
          <Grid item xs={12} md={5}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Stack spacing={4}>
                  <Box sx={{ width: "60px", height: "5px", bgcolor: BRAND_BLUE, borderRadius: "10px" }} />
                  <Typography variant="h2" fontWeight="900" sx={{ lineHeight: 1.1, color: '#1e293b' }}>
                    {activeService?.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7 }}>
                    {activeService?.desc}
                  </Typography>
                  <Button 
                    variant="contained" size="large" endIcon={<Send />}
                    onClick={() => setOpenPopup(true)}
                    sx={{ 
                      width: 'fit-content', bgcolor: BRAND_BLUE, fontWeight: 700, px: 4, py: 1.5,
                      borderRadius: '12px', textTransform: 'none', fontSize: '1rem',
                      boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.3)}`,
                      '&:hover': { bgcolor: '#013a85' }
                    }}
                  >
                    Start Your Project
                  </Button>
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Grid>

          {/* Icon Grid */}
          <Grid item xs={12} md={7}>
            <Box sx={{ 
              display: "grid", 
              gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, 
              gap: 3 
            }}>
              {services.map((service, index) => (
                <ServiceIconCard
                  key={service.id}
                  active={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box sx={{ width: '100%', height: '130px', borderRadius: '18px', overflow: 'hidden' }}>
                    <Box component="img" src={service.image} alt={service.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Typography variant="caption" fontWeight="900" textAlign="center"
                    sx={{ textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.7rem',
                      color: activeIndex === index ? '#1e293b' : '#94a3b8'
                    }}
                  >
                    {service.title}
                  </Typography>
                </ServiceIconCard>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Contact Popup Component */}
      <ContactPopup 
        open={openPopup} 
        onClose={() => setOpenPopup(false)} 
        serviceTitle={activeService?.title} 
      />
    </Section>
  );
};

export default ServicesGrid;