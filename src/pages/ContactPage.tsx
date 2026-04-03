import React from "react";
import { 
  Box, Typography, TextField, Button, Grid, Stack, Container, alpha 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { 
  EmailOutlined, 
  LocationOnOutlined, 
  LocalPhoneOutlined, 
  Instagram, 
  LinkedIn, 
  Facebook, 
  Twitter,
  SendRounded
} from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const ContactHero = styled(Box)(({ }) => ({
  width: "100%",
  height: "45vh",
  minHeight: "350px",
  // Fixed: Using a CSS Gradient instead of a missing image file to prevent Vite errors
  background: `linear-gradient(135deg, #05070A 0%, #1A1C20 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100px",
    background: "linear-gradient(to top, #fff, transparent)",
  }
}));

const SplitContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(10),
}));

const CustomTextField = styled(TextField)({
  '& .MuiInput-underline:before': { borderBottomColor: '#E0E0E0' },
  '& .MuiInput-underline:after': { borderBottomColor: '#2D5CFE' },
  '& .MuiInputLabel-root': { 
    color: 'rgba(0,0,0,0.4)', 
    fontSize: '0.85rem', 
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  '& .MuiInputBase-input': { fontSize: '1rem', padding: '10px 0' },
  marginBottom: '24px'
});

const SocialIcon = styled(Box)(({}) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${alpha('#2D5CFE', 0.2)}`,
  color: '#2D5CFE',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#2D5CFE',
    color: '#fff',
    transform: 'translateY(-3px)'
  }
}));

// --- SUB-COMPONENTS ---

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <Stack direction="row" spacing={2.5} alignItems="flex-start" mb={4}>
    <Box sx={{ 
      width: 48, 
      height: 48, 
      borderRadius: "12px", 
      bgcolor: alpha("#2D5CFE", 0.05), 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      color: "#2D5CFE",
      flexShrink: 0,
      border: `1px solid ${alpha("#2D5CFE", 0.1)}`
    }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="caption" fontWeight={700} sx={{ color: '#2D5CFE', textTransform: 'uppercase', letterSpacing: 1 }}>
        {label}
      </Typography>
      <Typography variant="body1" fontWeight={500} color="#333">{value}</Typography>
    </Box>
  </Stack>
);

// --- MAIN COMPONENT ---

export const ContactPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      
      <ContactHero>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="h2" fontWeight={900} color="#fff" textAlign="center">
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', mt: 1 }}>
            Any questions or remarks? Just write us a message!
          </Typography>
        </motion.div>
      </ContactHero>

      <SplitContainer maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* LEFT COLUMN */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: { md: 2 } }}>
              <Typography variant="h4" fontWeight={800} color="#1A1C20" sx={{ mb: 2 }}>
                Feel Free To Contact & <br /> Get In Touch!
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8 }}>
                We are here to help you. Our team of experts is available to answer your technical queries and discuss project collaborations.
              </Typography>
              
              <InfoRow icon={<LocalPhoneOutlined />} label="Email Address" value="gbmsofttech@gmail.com" />
              <InfoRow icon={<EmailOutlined />} label="Phone Number" value="+91 87660 78570" />
              <InfoRow icon={<LocationOnOutlined />} label="Location" value="Pune, Maharashtra, India" />

              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, mt: 4 }}>Follow us on social media:</Typography>
              <Stack direction="row" spacing={1.5}>
                <SocialIcon><Facebook fontSize="small" /></SocialIcon>
                <SocialIcon><Twitter fontSize="small" /></SocialIcon>
                <SocialIcon><LinkedIn fontSize="small" /></SocialIcon>
                <SocialIcon><Instagram fontSize="small" /></SocialIcon>
              </Stack>
            </Box>
          </Grid>
          
          {/* RIGHT COLUMN - THE FORM */}
          <Grid item xs={12} md={7}>
            <Box component="form" sx={{ 
              p: { xs: 3, md: 5 }, 
              bgcolor: '#fff', 
              borderRadius: '24px', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)'
            }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField label="First Name" variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField label="Last Name" variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField label="Email Address" variant="standard" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField label="Subject" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField 
                    label="Questions or Comments" 
                    variant="standard" 
                    fullWidth 
                    multiline 
                    rows={4} 
                  />
                </Grid>
              </Grid>
              
              <Button 
                variant="contained" 
                size="large"
                endIcon={<SendRounded />}
                sx={{ 
                  mt: 2, 
                  bgcolor: "#2D5CFE", 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: "12px",
                  fontWeight: 700,
                  boxShadow: '0 10px 20px rgba(45, 92, 254, 0.2)',
                  "&:hover": { bgcolor: "#1a46e6" }
                }}
              >
                Submit Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </SplitContainer>

      {/* MAP SECTION */}
      <Box sx={{ width: "100%", height: "400px", bgcolor: "#f5f5f5", display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #eee' }}>
         <Stack alignItems="center" spacing={1}>
            <LocationOnOutlined sx={{ fontSize: '3rem', color: '#2D5CFE' }} />
            <Typography variant="h6" fontWeight={700}>Pune, India</Typography>
            <Typography variant="body2" color="text.secondary">Visit our development hub</Typography>
         </Stack>
      </Box>

    </PageTransition>
  );
};