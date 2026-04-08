// @ts-nocheck
import React, { useState } from "react";
import { Box, Typography, Button, alpha, Grid, Stack, Container, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { 
  SendOutlined, 
  WorkOutline, 
  PeopleOutline,
  LocationOnOutlined,
  TrendingUpRounded
} from "@mui/icons-material";

const BRAND_BLUE = "#024aa8";

const StyledJobCard = styled(motion.div)(({ theme }) => ({
  height: "420px",
  backgroundColor: "#fff",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  border: `1px solid ${alpha("#e2e8f0", 0.8)}`,
  display: "flex",
  flexDirection: "column",
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: BRAND_BLUE,
  }
}));

const JobImage = styled(motion.img)({
  width: "100%",
  height: "180px",
  objectFit: "cover",
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const jobs = [
  { id: 1, title: "Senior Software Engineer", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", exp: "5-8 years", openings: 3, summary: "Lead the architecture of high-performance cloud applications using React and Node.js.", category: "Engineering" },
  { id: 2, title: "UI/UX Designer", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", exp: "2-4 years", openings: 2, summary: "Transform complex requirements into intuitive designs using Figma and high-fidelity prototypes.", category: "Design" },
  { id: 3, title: "Data Scientist", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", exp: "3-5 years", openings: 2, summary: "Leverage statistical modeling and machine learning to derive insights from massive datasets.", category: "Analytics" },
  { id: 4, title: "Full Stack Developer", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", exp: "2-5 years", openings: 5, summary: "Take ownership of feature development from database schema to front-end implementation.", category: "Engineering" }
];

export const OpenPositions = () => {
  const [hoveredJob, setHoveredJob] = useState(null);
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 15, background: "#f8fafc" }}>
      <Container>
        <Stack spacing={2} alignItems="center" sx={{ mb: 10, textAlign: "center" }}>
          <Chip 
            icon={<TrendingUpRounded sx={{ fontSize: '16px !important', color: BRAND_BLUE }} />}
            label="WE ARE HIRING" 
            sx={{ 
              bgcolor: alpha(BRAND_BLUE, 0.08), 
              color: BRAND_BLUE, 
              fontWeight: 800, 
              borderRadius: "8px",
              px: 1 
            }} 
          />
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: "-0.04em", fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Current <span style={{ color: BRAND_BLUE }}>Openings</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 500 }}>
            Building the future of GBM SoftTech starts with you. Join our global team of innovators.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={3} key={job.id}>
              <StyledJobCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
                whileHover={{ y: -10 }}
              >
                {/* Status Bar */}
                <Box sx={{ 
                  position: "absolute", top: 0, left: 0, width: "100%", height: "4px", 
                  bgcolor: hoveredJob === job.id ? BRAND_BLUE : alpha("#e2e8f0", 0.5),
                  transition: "background-color 0.3s ease", zIndex: 2
                }} />

                <AnimatePresence mode="wait">
                  {hoveredJob !== job.id ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ height: "100%", display: "flex", flexDirection: "column" }}
                    >
                      <Box sx={{ overflow: "hidden" }}>
                        <JobImage src={job.img} alt={job.title} whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} />
                      </Box>
                      <ContentWrapper>
                        <Typography variant="caption" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, mb: 1 }}>
                          {job.category.toUpperCase()}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 2, minHeight: "3em" }}>
                          {job.title}
                        </Typography>
                        
                        <Stack spacing={1.5} sx={{ mt: "auto" }}>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <LocationOnOutlined sx={{ fontSize: 16, color: "text.disabled" }} />
                            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>PUNE • HYBRID</Typography>
                          </Stack>
                          
                          <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" spacing={1} alignItems="center">
                              <WorkOutline sx={{ fontSize: 16, color: BRAND_BLUE }} />
                              <Typography variant="caption" sx={{ fontWeight: 700 }}>{job.exp}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <PeopleOutline sx={{ fontSize: 16, color: BRAND_BLUE }} />
                              <Typography variant="caption" sx={{ fontWeight: 700 }}>{job.openings} Seats</Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </ContentWrapper>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{ 
                        padding: "32px", height: "100%", display: "flex", 
                        flexDirection: "column", background: alpha(BRAND_BLUE, 0.02) 
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 900, color: BRAND_BLUE, mb: 2 }}>
                        Role Overview
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, flexGrow: 1 }}>
                        {job.summary}
                      </Typography>
                      
                      <Stack spacing={2}>
                        <Box sx={{ p: 2, bgcolor: "#fff", border: `1px solid ${alpha(BRAND_BLUE, 0.1)}`, borderRadius: "8px" }}>
                          <Typography variant="caption" display="block" sx={{ color: "text.disabled", fontWeight: 700, mb: 0.5 }}>
                            BENEFITS
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            Hybrid Work • Health Cover • Performance Bonus
                          </Typography>
                        </Box>
                        
                        <Button 
                          variant="contained" 
                          fullWidth 
                          endIcon={<SendOutlined />}
                          onClick={() => navigate("/apply", { state: { jobTitle: job.title } })}
                          sx={{ 
                            borderRadius: "12px", 
                            bgcolor: BRAND_BLUE,
                            fontWeight: 800, 
                            textTransform: "none", 
                            py: 1.5,
                            boxShadow: `0 10px 20px ${alpha(BRAND_BLUE, 0.2)}`
                          }}
                        >
                          Apply Now
                        </Button>
                      </Stack>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StyledJobCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};  