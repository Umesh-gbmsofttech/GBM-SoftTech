import React from "react";
import { Box, Typography, Divider, Grid, IconButton, Stack, alpha, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { 
  LinkedIn, 
  Twitter, 
  Instagram,
  LocationOnOutlined,
  SendOutlined
} from "@mui/icons-material";
import logo from "@assets/gbm-logo1.png";

// --- STYLED COMPONENTS ---

const FooterWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "#001e29", // Brand Ink
  color: "#fff",
  padding: theme.spacing(15, 0, 6),
  position: "relative",
  overflow: "hidden",
  // Subtle top glow to separate from previous section
  borderTop: `1px solid ${alpha("#fff", 0.05)}`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "10%",
    width: "80%",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${alpha("#fff", 0.1)}, transparent)`,
  }
}));

const FooterLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: alpha("#fff", 0.5),
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: 0.5,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateX(6px)",
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha("#fff", 0.03),
  color: alpha("#fff", 0.6),
  marginRight: theme.spacing(1.5),
  borderRadius: "0px", // Match architectural theme
  border: `1px solid ${alpha("#fff", 0.08)}`,
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderColor: theme.palette.primary.main,
    transform: "translateY(-5px)",
  },
}));

const NewsletterField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: alpha("#fff", 0.02),
    color: "#fff",
    borderRadius: "0px",
    fontSize: "0.9rem",
    "& fieldset": { borderColor: alpha("#fff", 0.1) },
    "&:hover fieldset": { borderColor: alpha("#fff", 0.2) },
    "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
  },
  "& .MuiInputBase-input::placeholder": { color: alpha("#fff", 0.3), opacity: 1 },
}));

// --- MAIN COMPONENT ---

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrap component="footer">
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: 3, md: 4 } }}>
        <Grid container spacing={8}>
          
          {/* Column 1: Brand Identity */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
               <img 
                 src={logo} 
                 alt="GBM Logo" 
                 style={{ height: 35, filter: 'brightness(0) invert(1)' }} 
               />
<<<<<<< HEAD
               <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -1 }}>
                 GBM <Box component="span" sx={{ fontWeight: 300, color: alpha("#fff", 0.5) }}>SOFTTECH</Box>
=======
               <Typography variant="h5" sx={{ fontWeight: 1000, letterSpacing: -1 }}>
                  <Box component="span" sx={{ fontWeight: 1000, color: alpha("#fff", 0.5) }}>SOFTTECH</Box>
>>>>>>> shriram
               </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 4, color: alpha("#fff", 0.5), lineHeight: 2, maxWidth: 320 }}>
              Specializing in the digital transformation of MGAs and enterprises. We engineer 
              high-performance ecosystems that bridge the gap between legacy stability 
              and modern innovation.
            </Typography>
            <Stack direction="row">
              <SocialButton size="small"><LinkedIn fontSize="small" /></SocialButton>
              <SocialButton size="small"><Twitter fontSize="small" /></SocialButton>
              <SocialButton size="small"><Instagram fontSize="small" /></SocialButton>
            </Stack>
          </Grid>

          {/* Column 2: Global Reach */}
          <Grid item xs={12} sm={6} md={2.5}>
<<<<<<< HEAD
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: 'primary.main', letterSpacing: 3 }}>
              GLOBAL REACH
            </Typography>
            <Stack spacing={2.5}>
              {[
                { city: "United States", region: "Headquarters" },
                { city: "Hyderabad", region: "Innovation Hub" },
                { city: "Pune", region: "Engineering Center" }
              ].map((loc, i) => (
                <Box key={i}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#fff", display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <LocationOnOutlined sx={{ fontSize: '1.1rem', color: alpha("#fff", 0.2) }} /> {loc.city}
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), ml: 4 }}>
                    {loc.region}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Navigation */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: 'primary.main', letterSpacing: 3 }}>
              EXPLORE
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/about">About Agency</FooterLink>
              <FooterLink to="/services">Capabilities</FooterLink>
              <FooterLink to="/portfolio">Work Archive</FooterLink>
              <FooterLink to="/careers">Join the Team</FooterLink>
              <FooterLink to="/contact">Get in Touch</FooterLink>
            </Stack>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} md={3.5}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, letterSpacing: -0.5 }}>
              Insights for Innovators
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: alpha("#fff", 0.4), lineHeight: 1.6 }}>
              Weekly deep-dives into React architecture and enterprise scaling strategies.
            </Typography>
=======
            
            <Stack spacing={2.5}>
              {[
                { city: "Pune", region: "Headquarters" },
               
              ].map((loc, i) => (
                <Box key={i}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#fff", display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <LocationOnOutlined sx={{ fontSize: '1.1rem', color: alpha("#fff", 0.2) }} /> {loc.city}
                  </Typography>
                  <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), ml: 4 }}>
                    {loc.region}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Navigation */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: 'primary.main', letterSpacing: 3 }}>
              EXPLORE
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/about">About Agency</FooterLink>
              <FooterLink to="/services">Capabilities</FooterLink>
              <FooterLink to="/careers">Join the Team</FooterLink>
              <FooterLink to="/contact">Get in Touch</FooterLink>
            </Stack>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} md={3.5}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, letterSpacing: -0.5 }}>
              Insights for Innovators
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: alpha("#fff", 0.4), lineHeight: 1.6 }}>
              Weekly deep-dives into React architecture and enterprise scaling strategies.
            </Typography>
>>>>>>> shriram
            <Stack direction="row" spacing={1}>
              <NewsletterField 
                fullWidth 
                placeholder="Email Address" 
                variant="outlined"
                size="small"
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: "primary.main", 
                  minWidth: "54px",
                  borderRadius: "0px",
                  "&:hover": { bgcolor: alpha("#f07d00", 0.8) }
                }}
              >
                <SendOutlined fontSize="small" />
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 10, borderColor: alpha("#fff", 0.05) }} />

        {/* Bottom Bar */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 3
        }}>
          <Typography variant="caption" sx={{ color: alpha("#fff", 0.3), fontWeight: 600, letterSpacing: 1 }}>
            © {currentYear} GBM SOFTTECH. ALL RIGHTS RESERVED. 
            <Box component="span" sx={{ ml: 2, color: alpha("#fff", 0.1) }}>|</Box>
            <Box component="span" sx={{ ml: 2, opacity: 0.6 }}>ENGINEERED FOR SCALE</Box>
          </Typography>
          
          <Stack direction="row" spacing={4}>
            <FooterLink to="/privacy" sx={{ fontSize: '0.7rem', opacity: 0.5 }}>PRIVACY</FooterLink>
            <FooterLink to="/terms" sx={{ fontSize: '0.7rem', opacity: 0.5 }}>TERMS</FooterLink>
          </Stack>
        </Box>
      </Box>
    </FooterWrap>
  );
};