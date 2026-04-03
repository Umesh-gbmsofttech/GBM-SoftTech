import React from 'react';
import { 
  Box, Container, Grid, Typography, Button, Stack, Paper 
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  EmojiEventsOutlined as AwardIcon,
  TipsAndUpdatesOutlined as StrategyIcon,
  SettingsSuggestOutlined as ServicesIcon,
  BusinessCenterOutlined as GrowthIcon,
  MailOutline as ContactIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const Vision: React.FC = () => {

  return (
    <Box sx={{ bgcolor: '#FFFFFF', overflow: 'hidden' }}>
      
      

      
      {/* SECTION 3: VISION, MISSION, HISTORY & GREY CTA */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              {[
                { l: 'Our Vision', bg: '#75db5b', c: '#1ee021', t: 'To be the global leader in providing transformative digital solutions that empower businesses.' },
                { l: 'Our Mission', bg: '#7285d7', c: '#101347', t: 'Delivering excellence through clean code, agile methodologies, and client-centric innovation.' },
                { l: 'Our History', bg: '#ef2c2cef', c: '#e03b1e', t: 'Founded on the principles of integrity and technical mastery, growing from a startup to an IT powerhouse.' }
              ].map((card, i) => (
                <Paper key={i} elevation={0} sx={{ p: 4, bgcolor: card.bg, borderRadius: '15px' }}>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 900, 
                    color: card.c, 
                    bgcolor: card.c === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : '#FFF',
                    display: 'inline-block',
                    px: 2, py: 0.5, borderRadius: '8px', mb: 2
                  }}>
                    {card.l}
                  </Typography>
                  <Typography variant="body2" sx={{ color: card.c === '#FFFFFF' ? '#fca5a5' : 'text.secondary', lineHeight: 1.6 }}>
                    {card.t}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ 
              height: '100%', minHeight: 480, borderRadius: '30px', position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 4, md: 8 }, color: '#FFF',
              backgroundImage: 'linear-gradient(rgba(45,45,45,0.85), rgba(45,45,45,0.85)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.2 }}>
                Our Roadmap Makes You <br /> More Comfortable in Digital Transformation
              </Typography>
              <Typography sx={{ opacity: 0.9, mb: 4, maxWidth: '90%', fontSize: '1.1rem' }}>
                We simplify complex technology so you can focus on growth. From cloud migration to custom software, GBM SoftTech ensures a seamless transition.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'theme.palette.primary.main', 
                  width: 'fit-content', 
                  borderRadius: '50px', 
                  px: 5, py: 1.5, 
                  fontWeight: 800,
                  color:'#FFf',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'theme.palette.primary.main' }
                }}
              >
                Start Your Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};