// @ts-nocheck
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
  backgroundColor: "#001e29",
  color: "#fff",
  padding: theme.spacing(15, 0, 6),
  position: "relative",
  overflow: "hidden",
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
  color: alpha("#fff", 0.6),
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: 0.5,
  transition: "all 0.2s ease",
  display: "inline-block",
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha("#fff", 0.03),
  color: alpha("#fff", 0.6),
  marginRight: theme.spacing(1.5),
  borderRadius: "0px",
  border: `1px solid ${alpha("#fff", 0.08)}`,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderColor: theme.palette.primary.main,
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
          
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
               
               <Typography variant="h5" sx={{ fontWeight: 1000, letterSpacing: 3 }}>
                  <Box component="span" sx={{ color: alpha("#fff", 0.5) }}>GBM SoftTech</Box>
               </Typography>
            </Box>

            <Typography variant="body2" sx={{ mb: 4, color: alpha("#fff", 0.6), lineHeight: 1.8, maxWidth: 320 }}>
              We deliver reliable and scalable digital solutions for enterprises and growing businesses. 
              Our focus is on building secure, high-performance systems that support long-term success.
            </Typography>

            <Stack direction="row">
              <SocialButton size="small"><LinkedIn fontSize="small" /></SocialButton>
              <SocialButton size="small"><Twitter fontSize="small" /></SocialButton>
              <SocialButton size="small"><Instagram fontSize="small" /></SocialButton>
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LocationOnOutlined sx={{ fontSize: '1.1rem', color: alpha("#fff", 0.3) }} /> Pune
                </Typography>
                <Typography variant="caption" sx={{ color: alpha("#fff", 0.4), ml: 4 }}>
                  Headquarters
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="overline" sx={{ fontWeight: 900, mb: 4, display: 'block', color: 'primary.main', letterSpacing: 3 }}>
              NAVIGATION
            </Typography>
            <Stack spacing={2}>
              <FooterLink to="/home">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </Stack>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} md={3.5}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: alpha("#fff", 0.5) }}>
              Subscribe to receive updates, insights, and company news.
            </Typography>

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

        {/* Bottom */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 3
        }}>
          <Typography variant="caption" sx={{ color: alpha("#fff", 0.4), fontWeight: 600 }}>
            © {currentYear} GBM SOFTTECH. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={4}>
            <FooterLink to="/privacy" sx={{ fontSize: '0.7rem' }}>Privacy Policy</FooterLink>
            <FooterLink to="/terms" sx={{ fontSize: '0.7rem' }}>Terms of Service</FooterLink>
          </Stack>
        </Box>
      </Box>
    </FooterWrap>
  );
};