// @ts-nocheck
import { 
  Box, Container, Grid, Typography, Button, Stack, Paper, alpha
} from '@mui/material';

export const Vision = () => {

  return (
    <div style={{ backgroundColor: "#FFFFFF", overflow: "hidden" }}>
      
      

      
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
                  <Typography variant="body2" sx={{ color: '#ffffff', lineHeight: 1.75, fontWeight: 500 }}>
                    {card.t}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: '100%',
                minHeight: { xs: 380, sm: 440, md: 480 },
                borderRadius: '30px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                px: { xs: 3, sm: 5, md: 8 },
                py: { xs: 5, sm: 6, md: 7 },
                color: '#FFF',
                backgroundImage: `
                  linear-gradient(135deg, ${alpha('#001e29', 0.9)} 0%, ${alpha('#00A3E0', 0.72)} 100%),
                  url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200)
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 24px 60px rgba(0, 30, 41, 0.18)',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: alpha('#ffffff', 0.78),
                  fontWeight: 800,
                  letterSpacing: 3,
                  mb: 1.5,
                }}
              >
                DIGITAL TRANSFORMATION
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  lineHeight: 1.08,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.1rem' },
                  maxWidth: '12ch',
                }}
              >
                A clearer roadmap for modern digital transformation.
              </Typography>

              <Typography
                sx={{
                  color: alpha('#ffffff', 0.9),
                  mb: 4,
                  maxWidth: { xs: '100%', md: '85%' },
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.8,
                }}
              >
                We turn complex systems into practical next steps, helping your team move from
                legacy friction to scalable, user-friendly digital experiences with confidence.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
              >
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#3ca61c',
                    width: 'fit-content',
                    borderRadius: '50px', 
                    px: 4.5, 
                    py: 1.5, 
                    fontWeight: 800,
                    color: '#ffffff',
                    textTransform: 'none',
                    boxShadow: '0 14px 30px rgba(60, 166, 28, 0.28)',
                    '&:hover': { bgcolor: '#2f8617' }
                  }}
                >
                  Start Your Project
                </Button>

                <Typography
                  variant="body2"
                  sx={{ color: alpha('#ffffff', 0.72), fontWeight: 600 }}
                >
                  Strategy, design, and execution aligned in one flow.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
