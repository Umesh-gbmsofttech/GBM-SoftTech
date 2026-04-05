// @ts-nocheck
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, Container, Stack,
  alpha, CircularProgress, Modal, Backdrop, Avatar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { SendOutlined } from "@mui/icons-material";
import gbmLogo from "@assets/gbm-logo.png"; // Ensure this path is correct

// --- Styled Components ---

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: theme.spacing(6),
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  borderRadius: 0,
  boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.03)}`,
}));

const SharpInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    backgroundColor: "#FCFDFF",
  },
});

// The Success Popup Styled Component
const SuccessBox = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "#FFFFFF",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 0, // Sharp
  padding: theme.spacing(6),
  textAlign: "center",
  outline: "none",
  boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
}));

export const JoinUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // Success Popup state

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      formType: "join",
      name: formData.get("name"),
      email: formData.get("email"),
      link: formData.get("link"),
    };

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzcSp9GxkdtfpCFFAt5sd7BIZUH_HHzKFuwXlsNP6WtnLFBL0CY37wmHq3RgGAoPMZVdQ/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setOpen(true); // Show the GBM Popup
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 15, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FormContainer>
            <Stack spacing={1} sx={{ mb: 6, textAlign: "center" }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 900, letterSpacing: 3 }}>
                CAREERS
              </Typography>
              <Typography variant="h3" fontWeight="900" sx={{ letterSpacing: -1.5 }}>
                Join the <span style={{ color: "#00A3E0" }}>GBM</span> Team
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 3 }}>
              <SharpInput name="name" placeholder="Full Name" fullWidth required disabled={loading} />
              <SharpInput name="email" placeholder="Email Address" type="email" fullWidth required disabled={loading} />
              <SharpInput name="link" placeholder="LinkedIn / Portfolio URL" fullWidth disabled={loading} />

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendOutlined />}
                sx={{ py: 2.2, borderRadius: 0, fontWeight: 800, textTransform: "uppercase" }}
              >
                {loading ? "Processing..." : "Send Application"}
              </Button>
            </Box>
          </FormContainer>
        </motion.div>
      </Container>

      {/* --- GBM BRANDED SUCCESS POPUP --- */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backdropFilter: "blur(4px)" } }}
      >
        <Box>
          <AnimatePresence>
            {open && (
              <SuccessBox
                initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-40%" }}
                animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Stack alignItems="center" spacing={3}>
                  <Avatar
                    src={gbmLogo}
                    sx={{ width: 80, height: 80, border: "2px solid #00A3E0", p: 0.5, bgcolor: "#fff" }}
                  />

                  <Box>
                    <Typography variant="h5" fontWeight="900" sx={{ mb: 1 }}>
                      Application Received!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Thank you for reaching out to <strong>GBM SoftTech</strong>.
                      Our talent team will review your profile and contact you shortly.
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => setOpen(false)}
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: 0, fontWeight: 900, py: 1.5 }}
                  >
                    Close
                  </Button>
                </Stack>
              </SuccessBox>
            )}
          </AnimatePresence>
        </Box>
      </Modal>
    </Box>
  );
};
