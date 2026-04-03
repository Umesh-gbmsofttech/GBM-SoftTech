import React from "react";
import { Box, Typography, Button, Stack, useTheme, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@components/ui/Section";
import { MutedText } from "@components/ui/StyledCard";

const HeroWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw", 
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(25),
  
  // Background gradient and image
  background: `linear-gradient(150deg, ${alpha(theme.palette.primary.main, 0.94)} 0%, ${alpha(theme.palette.secondary.main, 0.88)} 100%), 
               url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  
  textAlign: "center",
  color: "#fff", // Main content color set to white

  // --- THE CONCAVE (INNER CURVE) EFFECT ---
  clipPath: "ellipse(150% 100% at 50% 0%)",
}));

export const ServicesHero = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <HeroWrapper>
        <Container>
          <Stack spacing={4} alignItems="center" sx={{ maxWidth: 800, mx: 'auto' }}>
            
            {/* Tagline - Set to white */}
            <Typography variant="overline" fontWeight="700" sx={{ letterSpacing: 2, color: '#fff' }}>
              AREAS WHAT WE SERVE
            </Typography>

            {/* Heading - All white including the span */}
            <Typography variant="h1" fontWeight="900" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, color: '#fff' }}>
              IT Solutions for <br />
              <Box component="span" sx={{ color: '#fff' }}>Your Business</Box>
            </Typography>

            {/* Subtext - Set to high-opacity white */}
            <MutedText variant="h6" sx={{ fontWeight: 400, lineHeight: 1.6, color: alpha('#fff', 0.9) }}>
              Since our establishment, we have been delivering high-quality and sustainable 
              software solutions for corporate business purposes.
            </MutedText>

            {/* Buttons - White Background with Blue Text */}
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  px: 5, py: 1.8, 
                  borderRadius: 99,
                  backgroundColor: '#fff', // Button color white
                  color: theme.palette.primary.main, // Button font blue (theme primary)
                  fontWeight: '900',
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.9),
                  }
                }}
              >
                Learn More
              </Button>

              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  px: 5, py: 1.8, 
                  borderRadius: 99,
                  borderColor: '#fff', // Border white
                  color: '#fff', // Font white for outlined
                  borderWidth: 2,
                  fontWeight: '900',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: alpha('#fff', 0.1),
                    borderWidth: 2,
                  }
                }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Stack>
        </Container>
      </HeroWrapper>
    </Box>
  );
};