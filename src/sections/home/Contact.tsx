// @ts-nocheck
import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  alpha,
  CircularProgress,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PhoneInTalk, MailOutline, LocationOnOutlined, CheckCircleOutline } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// --- STYLED COMPONENTS ---

const GlassCard = styled(motion.create(Box))(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '32px',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha('#001e29', 0.05)}`,
  boxShadow: `0 40px 100px -20px ${alpha('#001e29', 0.08)}`,
  position: 'relative',
  zIndex: 2,
}));

const UnderlinedInput = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent',
    '&:before': { borderBottom: `1px solid ${alpha('#001e29', 0.1)}` },
    '&:hover:not(.Mui-disabled):before': { borderBottom: `2px solid ${alpha('#1976d2', 0.3)}` },
    padding: '10px 0',
  },
  '& .MuiInputLabel-root': {
    color: alpha('#001e29', 0.5),
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontSize: '0.75rem',
  },
  '& .MuiInputBase-input': {
    color: '#001e29',
    fontWeight: 500,
    fontSize: '1.1rem'
  },
}));

// --- MAIN COMPONENT ---

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    serviceType: '',
    message: '',
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyISxNX3rc-0PuAGkxdJU_7fEsNs8_aqdAdR_kohTd3Rm9_OdsTyh8OngwBegQProKplQ/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        formType: 'contact',
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        serviceType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error!', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: "160px", paddingBottom: "160px", backgroundColor: "#fbfcfd", position: "relative", overflow: "hidden" }}>

      {/* Soft Background Decor */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(25,118,210,0.05) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center">

          {/* Content Side */}
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Stack spacing={4}>
                <div>
                  <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 4 }}>
                    GET IN TOUCH
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, color: '#001e29', letterSpacing: '-0.03em' }}>
                    Ready to build <br />
                    <Box component="span" sx={{ color: alpha('#001e29', 0.2) }}>together?</Box>
                  </Typography>
                </div>

                <Typography sx={{ color: alpha('#001e29', 0.6), fontSize: '1.2rem', lineHeight: 1.8 }}>
                  Our team provides the high-level engineering strategy required for modern business ecosystems.
                </Typography>

                <Stack spacing={3}>
                  {[
                    { icon: <PhoneInTalk />, val: '+91 98765 43210' },
                    { icon: <MailOutline />, val: 'hello@gbmsofttech.com' },
                    { icon: <LocationOnOutlined />, val: 'Pune, India' }
                  ].map((item, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center">
                      <div style={{ color: "#00A3E0", display: "flex" }}>{item.icon}</div>
                      <Typography sx={{ fontWeight: 600, color: '#001e29' }}>{item.val}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Form Side */}
          <Grid item xs={12} md={7}>
            <GlassCard
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <Box
                    component={motion.div}
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    sx={{ textAlign: 'center', py: 10 }}
                  >
                    <CheckCircleOutline sx={{ fontSize: 80, color: '#10b981', mb: 3 }} />
                    <Typography variant="h4" sx={{ fontWeight: 900 }}>Message Received</Typography>
                    <Button onClick={() => setSubmitted(false)} sx={{ mt: 4, fontWeight: 700 }}>Back to Form</Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={6}>
                        <UnderlinedInput fullWidth label="Your Name" variant="standard" name="name" value={formData.name} onChange={handleChange} required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <UnderlinedInput fullWidth label="Email" variant="standard" type="email" name="email" value={formData.email} onChange={handleChange} required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <UnderlinedInput
                          fullWidth
                          label="Contact Number"
                          variant="standard"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          InputLabelProps={{ shrink: true }}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <UnderlinedInput
                          fullWidth
                          label="Service Type"
                          variant="standard"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          select
                          required
                        >
                          {["Website Development", "Mobile App Development", "Digital Marketing", "Custom Solutions"].map((service) => (
                            <MenuItem key={service} value={service}>
                              {service}
                            </MenuItem>
                          ))}
                        </UnderlinedInput>
                      </Grid>
                      <Grid item xs={12}>
                        <UnderlinedInput fullWidth multiline rows={3} label="Message" variant="standard" name="message" value={formData.message} onChange={handleChange} required />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={loading}
                          sx={{
                            py: 2, px: 6, borderRadius: '12px', bgcolor: '#114abd', color: '#fff',
                            fontWeight: 800, fontSize: '0.9rem', letterSpacing: 2,
                            boxShadow: '0 20px 40px rgba(0,30,41,0.2)',
                            '&:hover': { bgcolor: '#3ca61c' }
                          }}
                        >
                          {loading ? <CircularProgress size={24} color="inherit" /> : 'SEND'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </AnimatePresence>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
