import React from "react";
import { Box, Typography, Divider, Grid, IconButton, Stack, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@components/ui/Section";
import { Link as RouterLink } from "react-router-dom";
import { 
  LinkedIn, 
  Facebook, 
  Instagram, 
  Twitter, 
  EmailOutlined, 
  PhoneOutlined 
} from "@mui/icons-material";
import logo from "@assets/gbm-logo1.png";

// --- Styled Components ---

const FooterWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const FooterLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.secondary,
  fontSize: "0.85rem",
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

// --- Main Component ---

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    company: [
      { name: "About GBM", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/services" },
      { name: "Mobile Apps", path: "/services" },
      { name: "Digital Marketing", path: "/services" },
      { name: "Consulting", path: "/services" },
    ],
    products: [
      { name: "Skillmate", path: "/products" },
      { name: "MyGarage", path: "/products" },
      { name: "Custom Solutions", path: "/products" },
    ],
  };

  return (
    <FooterWrap>
      <Container>
        <Grid container spacing={4}>
          {/* Column 1: Brand & Bio */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
               <img src={logo} alt="GBM Logo" style={{ height: 30 }} />
               <Typography variant="h6" fontWeight="800" color="primary.main">
                  <span style={{ color: '#5f6368', fontWeight: 500 }}>SOFTTECH</span>
               </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300, lineHeight: 1.7 }}>
              Innovating technology solutions for a better tomorrow. We build products, platforms, and digital experiences that help teams move faster.
            </Typography>
            <Box>
              <SocialButton size="small"><LinkedIn fontSize="small" /></SocialButton>
              <SocialButton size="small"><Twitter fontSize="small" /></SocialButton>
              <SocialButton size="small"><Facebook fontSize="small" /></SocialButton>
              <SocialButton size="small"><Instagram fontSize="small" /></SocialButton>
            </Box>
          </Grid>

          {/* Column 2: Navigation */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="700" gutterBottom>Company</Typography>
            <Stack spacing={1.5}>
              {footerData.company.map((link) => (
                <FooterLink key={link.name} to={link.path}>{link.name}</FooterLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: What We Do */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="700" gutterBottom>What We Do</Typography>
            <Stack spacing={1.5}>
              {footerData.services.map((link) => (
                <FooterLink key={link.name} to={link.path}>{link.name}</FooterLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="700" gutterBottom>Get in Touch</Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailOutlined color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">gbmsofttech@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneOutlined color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">+91 87660 78570</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
                Pune, Maharashtra, India <br />
                Mon - Sat: 10 AM - 7 PM
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        {/* Bottom Bar: Copyright & Legal */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="caption" color="text.secondary">
            © {currentYear} GBM SoftTech. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
          </Stack>
        </Box>
      </Container>
    </FooterWrap>
  );
};