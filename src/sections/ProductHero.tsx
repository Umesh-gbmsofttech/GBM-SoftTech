// @ts-nocheck
import { Box, Typography, Button, Stack, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@components/ui/Section";
import { Pill } from "@components/ui/StyledCard";
import { RocketLaunchOutlined, ArrowDownward } from "@mui/icons-material";
import { motion } from "framer-motion"; // Use this for Web

const HeroWrapper = styled(Box)(({ theme }) => ({
  height:"vw",
  width: "100%",
  position: "relative",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(25), 
  
  // Premium IT Services Background
  background: `linear-gradient(150deg, ${alpha(theme.palette.primary.main, 0.94)} 0%, ${alpha(theme.palette.secondary.main, 0.88)} 100%), 
               url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff",
  
  // --- THE CONCAVE (INNER CURVE) EFFECT ---
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

export const ProductHero = () => {
  const theme = useTheme();

  const scrollToProducts = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ overflowX: "clip", width: "100%", maxWidth: "100%" }}>
      <HeroWrapper>
        <Container>
          <Stack spacing={4} alignItems="center">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Pill 
                sx={{ 
                  px: 3, py: 1, 
                  backgroundColor: alpha('#fff', 0.15), 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#fff', 0.2)}`,
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'center'
                }}
              >
                <RocketLaunchOutlined fontSize="small" />
                <Typography variant="caption" fontWeight="900" sx={{ letterSpacing: 1 }}>
                  GBM SOFTTECH ECOSYSTEM
                </Typography>
              </Pill>
            </motion.div>

            {/* Animated Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                fontWeight="900" 
                sx={{ 
                  fontSize: { xs: '2.8rem', md: '4.5rem' },
                  lineHeight: 1,
                  maxWidth: 950,
                  textShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  letterSpacing: -2
                }}
              >
                Innovative Products for a <br />
                <Box component="span" sx={{ color: alpha('#fff', 0.7) }}>
                  Better Tomorrow
                </Box>
              </Typography>
            </motion.div>

            {/* Animated Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  maxWidth: 750, 
                  mx: 'auto', 
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: alpha('#fff', 0.8),
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                From high-impact career training with Skillmate to 
                next-gen vehicle tech with MyGarage.
              </Typography>
            </motion.div>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mt: 3 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={scrollToProducts}
                  sx={{ 
                    borderRadius: 99, 
                    px: 5, py: 2, 
                    backgroundColor: '#fff', 
                    color: theme.palette.primary.main,
                    fontWeight: '900',
                    '&:hover': { backgroundColor: alpha('#fff', 0.9), transform: 'scale(1.05)' },
                    transition: '0.3s'
                  }}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  endIcon={<ArrowDownward />}
                  onClick={scrollToProducts}
                  sx={{ 
                    borderRadius: 99, 
                    px: 5, py: 2, 
                    borderColor: '#fff', 
                    color: '#fff',
                    borderWidth: 2,
                    fontWeight: '900',
                    '&:hover': { borderColor: '#fff', backgroundColor: alpha('#fff', 0.1), transform: 'scale(1.05)' },
                    transition: '0.3s'
                  }}
                >
                  View Ecosystem
                </Button>
              </Stack>
            </motion.div>

          </Stack>
        </Container>
      </HeroWrapper>
    </div>
  );
};
