import React from "react";
import { Typography, Button, Box, Stack, Container, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { DevicesOutlined, SettingsEthernetOutlined, LanguageOutlined, East } from "@mui/icons-material";

const ServiceItem = styled(motion.div)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: "transparent",
  border: `1px solid ${alpha("#001e29", 0.05)}`,
  overflow: "hidden",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .bg-number": { opacity: 0.08, transform: "scale(1.1) translateY(-20px)" },
    "& .action-btn": { color: theme.palette.primary.main, gap: theme.spacing(2) }
  }
}));

const BgNumber = styled(Typography)(({ }) => ({
  position: "absolute",
  right: "-10px",
  bottom: "-20px",
  fontSize: "12rem",
  fontWeight: 900,
  lineHeight: 1,
  color: "#001e29",
  opacity: 0.03,
  transition: "all 0.6s ease",
  pointerEvents: "none",
  zIndex: 0
}));

const services = [
  { icon: <DevicesOutlined />, title: "Full-Stack Systems", tag: "ARCHITECTURE", num: "01", desc: "High-performance React & Node.js clusters designed for sub-second latency and horizontal scalability." },
  { icon: <SettingsEthernetOutlined />, title: "Mobile Engineering", tag: "DEVELOPMENT", num: "02", desc: "Bespoke React Native applications leveraging native modules for high-fidelity user experiences." },
  { icon: <LanguageOutlined />, title: "UI Strategy", tag: "DESIGN", num: "03", desc: "Data-driven interface design that bridges complex backend logic with intuitive user journeys." }
];

export const Services = () => {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="flex-end" sx={{ mb: 10 }} spacing={4}>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 4, color: "primary.main", mb: 1, display: "block" }}>OUR EXPERTISE</Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2.5rem", md: "4rem" }, color: "#001e29", lineHeight: 1 }}>Digital Integrity<Box component="span" sx={{ color: alpha("#001e29", 0.2) }}>.</Box></Typography>
          </Box>
          <Typography sx={{ color: alpha("#001e29", 0.6), fontSize: "1.1rem", maxWidth: 420, lineHeight: 1.6, borderLeft: "3px solid", borderColor: "primary.main", pl: 3 }}>We architect technical solutions that balance aggressive performance goals with elegant, maintainable codebases.</Typography>
        </Stack>
        <Grid container spacing={0}>
          {services.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <ServiceItem initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <BgNumber className="bg-number">{item.num}</BgNumber>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
                    <Box sx={{ width: 12, height: 2, bgcolor: "primary.main" }} />
                    <Typography variant="caption" sx={{ fontWeight: 900, letterSpacing: 2, color: alpha("#001e29", 0.4) }}>{item.tag}</Typography>
                  </Stack>
                  <Box sx={{ color: "primary.main", mb: 3, "& svg": { fontSize: "2.5rem" } }}>{item.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: "#001e29", mb: 2 }}>{item.title}</Typography>
                  <Typography sx={{ color: alpha("#001e29", 0.6), fontSize: "0.95rem", lineHeight: 1.7, mb: 4, maxWidth: "90%" }}>{item.desc}</Typography>
                  <Button disableRipple className="action-btn" endIcon={<East />} sx={{ p: 0, color: "#001e29", fontWeight: 800, transition: "0.3s ease", "&:hover": { bgcolor: "transparent" } }}>Explore Expertise</Button>
                </Box>
              </ServiceItem>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="center" sx={{ mt: 8 }}>
          <Button variant="contained" sx={{ bgcolor: "#001e29", color: "#fff", px: 4, py: 1.5, borderRadius: 0, fontWeight: 800, "&:hover": { bgcolor: "primary.main" } }}>Download Capabilities Deck</Button>
        </Stack>
      </Container>
    </Box>
  );
};