// @ts-nocheck
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, MenuItem,
  CircularProgress, Dialog, DialogContent, Zoom, IconButton, Link
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container, TwoColumn } from "@components/ui/Section";
import { HoverCard, MutedText } from "@components/ui/StyledCard";
import {
  EmailOutlined, PhoneOutlined, LocationOnOutlined,
  CheckCircleOutline, CloseOutlined
} from "@mui/icons-material";
import logo from "@assets/gbm-logo1.png"; // Ensure this path is correct

// --- STYLED COMPONENTS ---

const FormGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const ContactCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5),
  height: '100%'
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2)
}));

const OfficeMap = styled(Box)(({ theme }) => ({
  height: 160,
  borderRadius: theme.shape.borderRadius,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #eee',
  marginBottom: theme.spacing(1),
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  // Soft overlay to ensure readability of the 'View on Map' text
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.15)',
    transition: 'background-color 0.3s'
  },
  '&:hover::after': {
    backgroundColor: 'rgba(0,0,0,0)' // Clear overlay on hover
  }
}));

const SideStack = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3)
}));

// --- MAIN COMPONENT ---

export const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: ""
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzcSp9GxkdtfpCFFAt5sd7BIZUH_HHzKFuwXlsNP6WtnLFBL0CY37wmHq3RgGAoPMZVdQ/exec";

  // MAP DATA
  const mapLink = "https://share.google/eBdz7NyS5Q1Wcla9P";

  // HIGH-QUALITY OFFICE IMAGE
  // I selected a modern workspace image to represent 'Our Office' effectively.
  const mapPreviewImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        formType: "contact",
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSuccessOpen(true);
      setFormData({ name: "", email: "", serviceType: "", message: "" });
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <TwoColumn>
        {/* Contact Form Side */}
        <ContactCard>
          <Typography variant="h5" fontWeight="600">Send us a Message</Typography>
          <FormGrid component="form" onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth required />
            <TextField label="Service Type" name="serviceType" select fullWidth value={formData.serviceType} onChange={handleChange} required>
              {["Website Development", "Mobile App Development", "Digital Marketing", "Custom Solutions"].map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </TextField>
            <TextField label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth required />
            <Button type="submit" variant="contained" size="large" disabled={loading} sx={{ py: 1.5, borderRadius: 99 }}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
            </Button>
          </FormGrid>
        </ContactCard>

        {/* Info Side */}
        <SideStack>
          <ContactCard>
            <Typography variant="h6" fontWeight="600">Our Office</Typography>

            {/* Clickable Map Link */}
            <Link href={mapLink} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
              <OfficeMap sx={{
                backgroundImage: `url(${mapPreviewImage})`,
                backgroundSize: 'cover'
              }}>
                <div
                  style={{
                    zIndex: 1,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    padding: '6px 16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                    backdropFilter: 'blur(2px)'
                  }}
                />
              </OfficeMap>
            </Link>

            <MutedText variant="body2">Pune, Maharashtra, India</MutedText>
          </ContactCard>

          <ContactCard>
            <Typography variant="h6" fontWeight="600">Contact Information</Typography>
            <InfoRow><EmailOutlined color="primary" /><Typography variant="body2">gbmsofttech@gmail.com</Typography></InfoRow>
            <InfoRow><PhoneOutlined color="primary" /><Typography variant="body2">+91 87660 78570</Typography></InfoRow>
            <InfoRow><LocationOnOutlined color="primary" /><Typography variant="body2">Pune, India</Typography></InfoRow>
          </ContactCard>
        </SideStack>
      </TwoColumn>

      {/* --- SUCCESS POPUP MODAL --- */}
      <Dialog
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        TransitionComponent={Zoom}
        PaperProps={{
          sx: { borderRadius: 4, p: 2, textAlign: 'center', maxWidth: 400 }
        }}
      >
        <IconButton
          onClick={() => setSuccessOpen(false)}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseOutlined />
        </IconButton>
        <DialogContent>
          <div style={{ marginBottom: "16px" }}>
            <img src={logo} alt="GBM Logo" style={{ width: 80, height: 'auto' }} />
          </div>
          <CheckCircleOutline sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" fontWeight="700" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Your message has been sent successfully to GBM SoftTech. We will get back to you shortly.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setSuccessOpen(false)}
            sx={{ borderRadius: 99, py: 1.5 }}
          >
            Great, Thanks!
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
