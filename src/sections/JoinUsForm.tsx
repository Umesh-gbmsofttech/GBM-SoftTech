// @ts-nocheck
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, Container, Stack,
  alpha, CircularProgress, Modal, Backdrop, Avatar, InputAdornment, Grid
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PersonOutline, MailOutline, 
  PhoneIphoneOutlined, LinkOutlined, VerifiedUserOutlined,
  RocketLaunchOutlined, HubOutlined
} from "@mui/icons-material";
import gbmLogo from "@assets/gbm-logo.png";

// --- Advanced Styled Components ---

const PortalCard = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(30px) saturate(180%)",
  WebkitBackdropFilter: "blur(30px) saturate(180%)",
  borderRadius: "40px",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: `0 80px 150px -30px ${alpha("#001e29", 0.2)}`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: { flexDirection: "column" },
}));

const VisualSide = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, #001e29 0%, #003a52 100%)`,
  padding: theme.spacing(6),
  color: "#ffffff", // Ensures default text is white
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "40%",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: { width: "100%", textAlign: "center", py: 8 },
}));

const NeumorphicInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    backgroundColor: "#F0F4F8",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "1px solid transparent",
    "& fieldset": { border: "none" },
    "&:hover": { 
      backgroundColor: "#E2E8F0",
      transform: "translateY(-2px)" 
    },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
      boxShadow: `0 15px 35px ${alpha(theme.palette.primary.main, 0.12)}`,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    },
  },
  "& .MuiInputBase-input": { padding: "20px 15px" }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  padding: "18px 0",
  fontSize: "1.1rem",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "2px",
  background: "linear-gradient(90deg, #00A3E0 0%, #007bbd 100%)",
  boxShadow: "0 20px 40px rgba(0, 163, 224, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 25px 50px rgba(0, 163, 224, 0.5)",
    transform: "scale(1.02)",
  },
}));

export const JoinUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyISxNX3rc-0PuAGkxdJU_7fEsNs8_aqdAdR_kohTd3Rm9_OdsTyh8OngwBegQProKplQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const data = {
      formType: "career_application",
      name: formData.get("name"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
      link: formData.get("link"),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setOpen(true);
      e.target.reset();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      py: 15, 
      background: "radial-gradient(circle at 50% 50%, #F0F4F8 0%, #E2E8F0 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      
      <Container maxWidth="lg">
        <PortalCard component={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          
          <VisualSide>
            <Box sx={{ position: "absolute", top: -50, left: -50, width: 200, height: 200, bgcolor: "rgba(0, 163, 224, 0.2)", filter: "blur(60px)", borderRadius: "50%" }} />
            <Stack spacing={4} sx={{ position: "relative", zIndex: 2 }}>
              <Avatar src={gbmLogo} sx={{ width: 60, height: 60, bgcolor: "#fff", p: 1 }} />
              <Box>
                {/* Fixed: Added color: "#ffffff" here */}
                <Typography variant="h4" fontWeight="900" sx={{ mb: 2, lineHeight: 1.2, color: "#ffffff" }}>
                  Future-Proof <br /> Your Career.
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 300, color: "#ffffff" }}>
                  We don't just hire employees; we curate innovators for the next digital era.
                </Typography>
              </Box>

              <Stack spacing={2}>
                {[
                  { icon: <RocketLaunchOutlined />, text: "Global Impact Projects" },
                  { icon: <HubOutlined />, text: "Decentralized Workflow" },
                  { icon: <VerifiedUserOutlined />, text: "Tier-1 Mentorship" }
                ].map((item, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ color: "#00A3E0" }}>{item.icon}</Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, color: "#ffffff" }}>
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </VisualSide>

          <Box sx={{ flex: 1, p: { xs: 4, md: 8 }, bgcolor: "#fff" }}>
            <Typography variant="h5" fontWeight="900" sx={{ mb: 1, color: "#001e29" }}>
              GBM
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
              Complete the secure application below to sync with our talent lead.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <NeumorphicInput fullWidth name="name" placeholder="Full Name" required 
                    InputProps={{ startAdornment: <InputAdornment position="start"><PersonOutline fontSize="small"/></InputAdornment> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <NeumorphicInput fullWidth name="email" placeholder="Email Address" type="email" required 
                    InputProps={{ startAdornment: <InputAdornment position="start"><MailOutline fontSize="small"/></InputAdornment> }} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <NeumorphicInput 
                    fullWidth 
                    name="contactNumber" 
                    type="tel"
                    placeholder="10-Digit Mobile Number" 
                    required 
                    disabled={loading}
                    inputProps={{ 
                      pattern: "[0-9]{10}",
                      maxLength: 10,
                    }}
                    InputProps={{ 
                      startAdornment: (
                        <InputAdornment position="start">
                            <PhoneIphoneOutlined fontSize="small"/>
                        </InputAdornment>
                      ) 
                    }} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <NeumorphicInput fullWidth name="link" placeholder="Portfolio / LinkedIn URL" 
                    InputProps={{ startAdornment: <InputAdornment position="start"><LinkOutlined fontSize="small"/></InputAdornment> }} 
                  />
                </Grid>
              </Grid>

              <SubmitButton type="submit" variant="contained" disabled={loading}>
                {loading ? <CircularProgress size={26} color="inherit" /> : "Submit Application"}
              </SubmitButton>
            </Box>
          </Box>
        </PortalCard>
      </Container>

      <Modal open={open} onClose={() => setOpen(false)} BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(15px)", bgcolor: "rgba(0,30,41,0.8)" } }}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", outline: "none", width: "100%", maxWidth: 450 }}>
          <AnimatePresence>
            {open && (
              <Box component={motion.div} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} sx={{ bgcolor: "#fff", p: 6, borderRadius: "40px", textAlign: "center", boxShadow: 24 }}>
                <Avatar src={gbmLogo} sx={{ width: 80, height: 80, mx: "auto", mb: 3, border: "3px solid #00A3E0", p: 1 }} />
                <Typography variant="h4" fontWeight="900" gutterBottom>Thank You</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                  Your data has been successfully transmitted to the GBM Talent Cloud. <br /> Our team will initialize contact within 48 hours.
                </Typography>
                <Button onClick={() => setOpen(false)} fullWidth variant="outlined" sx={{ borderRadius: "15px", py: 1.5, fontWeight: 900 }}>Close</Button>
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Modal>
    </Box>
  );
};