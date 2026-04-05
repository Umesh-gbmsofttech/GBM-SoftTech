// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Button, alpha, Grid, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { 
  SendOutlined, 
  WorkOutline, 
  PeopleOutline,
  LocationOnOutlined
} from "@mui/icons-material";

const StyledJobCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: 0, 
  height: "400px", 
  display: "flex",
  flexDirection: "column",
  borderRadius: 0, // Sharp edges as requested
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  backgroundColor: theme.palette.background.paper,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 15px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
  }
}));

const JobImage = styled("img")({
  width: "100%",
  height: "160px",
  objectFit: "cover",
  display: "block",
  borderRadius: 0, 
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3, 3, 3),
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  alignItems: "center",
}));

const jobs = [
  { id: 1, title: "Senior Software Engineer", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", exp: "5-8 years", openings: 3, summary: "Lead the architecture of high-performance cloud applications using React and Node.js." },
  { id: 2, title: "UI/UX Designer", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", exp: "2-4 years", openings: 2, summary: "Transform complex requirements into intuitive designs using Figma and high-fidelity prototypes." },
  { id: 3, title: "Data Scientist", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", exp: "3-5 years", openings: 2, summary: "Leverage statistical modeling and machine learning to derive insights from massive datasets." },
  { id: 4, title: "Full Stack Developer", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", exp: "2-5 years", openings: 5, summary: "Take ownership of feature development from database schema to front-end implementation." }
];

export const OpenPositions = () => {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const navigate = useNavigate(); // NEW

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" fontWeight="900" gutterBottom>Current Openings</Typography>
          <Box sx={{ width: 50, height: 3, bgcolor: 'primary.main', mx: 'auto', borderRadius: 0 }} />
        </Box>

        <Grid container spacing={3}>
          {jobs.map((job) => {
            const isHovered = hoveredJob === job.id;
            return (
              <Grid item xs={12} sm={6} md={3} key={job.id}>
                <StyledJobCard
                  onMouseEnter={() => setHoveredJob(job.id)}
                  onMouseLeave={() => setHoveredJob(null)}
                >
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', height: '100%' }}>
                        <JobImage src={job.img} alt={job.title} />
                        <ContentWrapper>
                          <Box sx={{ minHeight: '55px', display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight="800" color="primary.main" sx={{ lineHeight: 1.2 }}>{job.title}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                            <LocationOnOutlined sx={{ fontSize: 14, color: 'text.disabled' }} />
                            <Typography variant="caption" fontWeight="700" color="text.secondary">PUNE (HYBRID)</Typography>
                          </Box>
                          <Stack spacing={0.8} sx={{ width: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                              <WorkOutline sx={{ fontSize: 18, color: 'primary.main' }} />
                              <Typography variant="body2" sx={{ fontSize: '0.85rem' }}><b>Exp:</b> {job.exp}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                              <PeopleOutline sx={{ fontSize: 18, color: 'primary.main' }} />
                              <Typography variant="body2" sx={{ fontSize: '0.85rem' }}><b>Openings:</b> {job.openings}</Typography>
                            </Box>
                          </Stack>
                        </ContentWrapper>
                      </motion.div>
                    ) : (
                      <motion.div key="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="subtitle2" fontWeight="900" color="primary.main" gutterBottom>Role Overview</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left', lineHeight: 1.6, color: 'text.secondary', flexGrow: 1, mt: 1, fontSize: '0.875rem' }}>{job.summary}</Typography>
                        <Button 
                          variant="contained" 
                          fullWidth 
                          endIcon={<SendOutlined />}
                          onClick={() => navigate("/apply", { state: { jobTitle: job.title } })} // NEW: Pass state
                          sx={{ mt: 2, borderRadius: 0, fontWeight: 800, textTransform: 'none', py: 1 }}
                        >
                          Apply Now
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StyledJobCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
