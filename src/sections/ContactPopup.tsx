// @ts-nocheck
import React, { useState } from 'react';
import { 
  Dialog, DialogContent, Box, Typography, TextField, 
  Button, IconButton, Stack, alpha, Grid, Divider,
  MenuItem, CircularProgress, Zoom
} from '@mui/material';
import { 
  CloseRounded, 
  ArrowForwardRounded, 
  BusinessCenterOutlined,
  LockOutlined,
  CheckCircleOutline
} from '@mui/icons-material';
import { motion, AnimatePresence } from "framer-motion"; // Fixed: Added AnimatePresence
import logo from "@assets/gbm-logo1.png";

const BRAND_BLUE = "#024aa8";
const TEXT_MAIN = "#1e293b";
const TEXT_MUTED = "#64748b";

// --- Enterprise Styled Props ---
const inputProps = {
  variant: "outlined",
  size: "small",
  fullWidth: true,
  required: true,
  sx: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      bgcolor: "#ffffff",
      '& fieldset': { borderColor: alpha('#cbd5e1', 0.6) },
      '&:hover fieldset': { borderColor: alpha(BRAND_BLUE, 0.4) },
      '&.Mui-focused fieldset': { borderColor: BRAND_BLUE, borderWidth: '1px' },
    },
    '& .MuiInputLabel-root': { fontSize: '0.85rem', color: TEXT_MUTED },
    '& .MuiInputBase-input': { fontSize: '0.9rem', py: 1.2 }
  }
};

export const ContactPopup = ({ open, onClose, serviceTitle }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    serviceType: serviceTitle || "Custom Solutions",
    message: ""
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyISxNX3rc-0PuAGkxdJU_7fEsNs8_aqdAdR_kohTd3Rm9_OdsTyh8OngwBegQProKplQ/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "popup-inquiry" }),
      });
      setSuccess(true);
      // Clear data after success
      setFormData({ name: "", email: "", contactNumber: "", serviceType: serviceTitle || "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          backgroundImage: 'none',
          bgcolor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
          overflow: 'visible' 
        }
      }}
    >
      {/* Top Blue Accent */}
      <Box sx={{ height: '4px', width: '100%', bgcolor: BRAND_BLUE, borderRadius: '16px 16px 0 0' }} />
      
      <IconButton 
        onClick={onClose}
        size="small"
        sx={{ 
          position: 'absolute', right: 12, top: 12, 
          color: TEXT_MUTED,
          zIndex: 10,
          '&:hover': { color: TEXT_MAIN, bgcolor: alpha(TEXT_MUTED, 0.05) }
        }}
      >
        <CloseRounded fontSize="small" />
      </IconButton>

      <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Stack spacing={3} component="form" onSubmit={handleSubmit}>
                {/* Header */}
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <BusinessCenterOutlined sx={{ fontSize: 18, color: BRAND_BLUE }} />
                    <Typography 
                      variant="subtitle2" 
                      sx={{ fontWeight: 700, color: BRAND_BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}
                    >
                      Quick Inquiry
                    </Typography>
                  </Stack>
                  
                  <Typography variant="h5" sx={{ fontWeight: 800, color: TEXT_MAIN, mb: 1 }}>
                    Request Consultation
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: TEXT_MUTED, lineHeight: 1.5 }}>
                    Interested in <b style={{ color: TEXT_MAIN }}>{serviceTitle || "our solutions"}</b>? 
                    Leave your details and we'll reach out.
                  </Typography>
                </Box>

                {/* Form Fields */}
                <Stack spacing={1.8}>
                  <Grid container spacing={1.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} {...inputProps} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Phone" name="contactNumber" value={formData.contactNumber} onChange={handleChange} {...inputProps} />
                    </Grid>
                  </Grid>

                  <TextField label="Business Email" name="email" type="email" value={formData.email} onChange={handleChange} {...inputProps} />

                  <TextField label="Service Vertical" name="serviceType" select value={formData.serviceType} onChange={handleChange} {...inputProps}>
                    {["Website Development", "Mobile App Development", "Digital Marketing", "Custom Solutions"].map((s) => (
                      <MenuItem key={s} value={s} sx={{ fontSize: '0.85rem' }}>{s}</MenuItem>
                    ))}
                  </TextField>
                  
                  <TextField 
                    label="How can we assist?" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    {...inputProps} 
                    multiline 
                    rows={3} 
                  />

                  <Button 
                    type="submit"
                    variant="contained" 
                    fullWidth
                    disabled={loading}
                    disableElevation
                    endIcon={!loading && <ArrowForwardRounded fontSize="small" />}
                    sx={{ 
                      py: 1.5, 
                      bgcolor: BRAND_BLUE, 
                      fontWeight: 700, 
                      borderRadius: '8px',
                      textTransform: 'none', 
                      fontSize: '0.95rem',
                      '&:hover': { bgcolor: '#013a85' }
                    }}
                  >
                    {loading ? <CircularProgress size={20} color="inherit" /> : "Send Request"}
                  </Button>
                </Stack>

                {/* Trust Footer */}
                <Box>
                  <Divider sx={{ mb: 2, opacity: 0.6 }} />
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                    <LockOutlined sx={{ fontSize: 14, color: TEXT_MUTED }} />
                    <Typography variant="caption" sx={{ color: TEXT_MUTED, fontWeight: 500 }}>
                      Data encryption and privacy guaranteed.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', py: 2 }}>
                <Box sx={{ p: 1.5, bgcolor: alpha(BRAND_BLUE, 0.1), borderRadius: '50%', mb: 1 }}>
                  <CheckCircleOutline sx={{ fontSize: 60, color: BRAND_BLUE }} />
                </Box>
                <Typography variant="h5" fontWeight={800} color={TEXT_MAIN}>
                  Request Received
                </Typography>
                <Typography variant="body2" color={TEXT_MUTED} sx={{ mb: 3 }}>
                  Our team has been notified. An advisor will contact you within 24 hours via email or phone.
                </Typography>
                <Button 
                  variant="outlined" 
                  onClick={onClose}
                  sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 700, px: 4 }}
                >
                  Close Window
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;