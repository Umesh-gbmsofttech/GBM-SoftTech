// @ts-nocheck
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, MenuItem,
  CircularProgress, Dialog, DialogContent, Zoom, IconButton, Link, Stack, alpha
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Container, TwoColumn } from "@components/ui/Section";
import { HoverCard, MutedText } from "@components/ui/StyledCard";
import {
  EmailOutlined, PhoneOutlined, LocationOnOutlined,
  CheckCircleOutline, CloseOutlined, ArrowForwardOutlined,
  PublicOutlined
} from "@mui/icons-material";
import logo from "@assets/gbm-logo1.png";

// --- ADVANCED STYLED COMPONENTS ---

const StyledContactCard = styled(motion.div)(({ theme }) => ({
  background: theme.palette.mode === 'light' 
    ? "rgba(255, 255, 255, 0.8)" 
    : alpha(theme.palette.background.paper, 0.8),
  backdropFilter: "blur(20px)",
  borderRadius: "32px",
  padding: theme.spacing(5),
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: `0 40px 80px ${alpha(theme.palette.common.black, 0.05)}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

const ModernInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    transition: "all 0.3s ease",
    "&.Mui-focused": {
      backgroundColor: "#fff",
      boxShadow: `0 10px 25px ${alpha(theme.palette.primary.main, 0.1)}`,
    }
  }
}));

const MapWidget = styled(Box)(({ theme }) => ({
  height: 200,
  borderRadius: "24px",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  "&::before": {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
    zIndex: 1
  }
}));

const StatusBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  padding: '6px 12px',
  borderRadius: '99px',
  backgroundColor: alpha('#4CAF50', 0.9),
  color: '#fff',
  fontSize: '0.75rem',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  zIndex: 2,
  backdropFilter: 'blur(4px)'
}));

// --- MAIN COMPONENT ---

export const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    serviceType: "",
    message: ""
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyISxNX3rc-0PuAGkxdJU_7fEsNs8_aqdAdR_kohTd3Rm9_OdsTyh8OngwBegQProKplQ/exec";
  const mapLink = "https://share.google/eBdz7NyS5Q1Wcla9P";
  const mapPreviewImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      });
      setSuccessOpen(true);
      setFormData({ name: "", email: "", contactNumber: "", serviceType: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 12 }}>
      <TwoColumn spacing={6}>
        {/* Contact Form Side */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <StyledContactCard>
            <Box>
              <Typography variant="h4" fontWeight="900" sx={{ letterSpacing: -1, mb: 1 }}>
                Start a <span style={{ color: "#00A3E0" }}>Conversation</span>
              </Typography>
              <MutedText variant="body1">Complete the form below, and we’ll get back to you as soon as possible.</MutedText>
            </Box>

            <Stack component="form" onSubmit={handleSubmit} spacing={2.5}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <ModernInput label="Full Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
                <ModernInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
              </Stack>
              
              <ModernInput 
                label="Comm-Link (Phone)" 
                name="contactNumber" 
                value={formData.contactNumber} 
                onChange={handleChange} 
                placeholder="10-digit number"
                inputProps={{ pattern: "[0-9]{10}", maxLength: 10 }}
                fullWidth required 
              />

              <ModernInput label="Service Vertical" name="serviceType" select fullWidth value={formData.serviceType} onChange={handleChange} required>
                {["Website Development", "Mobile App Development", "Digital Marketing", "Custom Solutions"].map((s) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </ModernInput>

              <ModernInput label="How can we help?" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth required />
              
              <Button 
                type="submit" 
                variant="contained" 
                disabled={loading} 
                endIcon={!loading && <ArrowForwardOutlined />}
                sx={{ 
                  py: 2.2, 
                  borderRadius: "18px", 
                  fontWeight: 900, 
                  fontSize: '1rem',
                  letterSpacing: 2,
                  boxShadow: '0 20px 40px rgba(0, 163, 224, 0.2)'
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
              </Button>
            </Stack>
          </StyledContactCard>
        </motion.div>

        {/* Info Side */}
        <Stack spacing={4} component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <StyledContactCard>
            <Typography variant="h6" fontWeight="900" sx={{ letterSpacing: 1 }}>HQ LOCATION</Typography>
            
            <Link href={mapLink} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
              <MapWidget sx={{ backgroundImage: `url(${mapPreviewImage})` }}>
                <StatusBadge>
                  <Box sx={{ width: 8, height: 8, bgcolor: '#fff', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
                  OFFICE OPEN
                </StatusBadge>
                <Box sx={{ position: 'absolute', bottom: 16, left: 16, zIndex: 2, color: '#fff' }}>
                  <Typography variant="subtitle2" fontWeight="800">GBM SOFTECH</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>Click to open Maps</Typography>
                </Box>
              </MapWidget>
            </Link>

            <Stack spacing={2.5} sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha("#00A3E0", 0.1), color: "#00A3E0" }}><EmailOutlined /></Box>
                <Box><Typography variant="caption" color="text.secondary" fontWeight="700">EMAIL</Typography><Typography variant="body2" fontWeight="600">connect@gbmsofttech.com</Typography></Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha("#00A3E0", 0.1), color: "#00A3E0" }}><PhoneOutlined /></Box>
                <Box><Typography variant="caption" color="text.secondary" fontWeight="700">PHONE</Typography><Typography variant="body2" fontWeight="600">+91 87660 78570</Typography></Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha("#00A3E0", 0.1), color: "#00A3E0" }}><PublicOutlined /></Box>
                <Box><Typography variant="caption" color="text.secondary" fontWeight="700">REGION</Typography><Typography variant="body2" fontWeight="600">Maharashtra, India</Typography></Box>
              </Box>
            </Stack>
          </StyledContactCard>
        </Stack>
      </TwoColumn>

      {/* SUCCESS POPUP */}
      <Dialog open={successOpen} onClose={() => setSuccessOpen(false)} TransitionComponent={Zoom} PaperProps={{ sx: { borderRadius: "40px", p: 4, textAlign: 'center', maxWidth: 450, overflow: 'visible' } }}>
        <DialogContent>
          <Box sx={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', p: 2, bgcolor: '#fff', borderRadius: '50%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src={logo} alt="GBM" style={{ width: 60 }} />
          </Box>
          <CheckCircleOutline sx={{ fontSize: 80, color: '#00A3E0', mt: 2, mb: 2 }} />
          <Typography variant="h4" fontWeight="900" sx={{ letterSpacing: -1 }}>Application Received</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.7 }}>
          "Got it! Someone from our team will reach out to you soon (usually within 24 hours)."          </Typography>
          <Button variant="contained" fullWidth onClick={() => setSuccessOpen(false)} sx={{ borderRadius: "16px", py: 2, fontWeight: 900, letterSpacing: 1 }}>ACKNOWLEDGE</Button>
        </DialogContent>
      </Dialog>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </Container>
  );
};