import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Stack, alpha } from '@mui/material';
import { Send, PhoneInTalk, MailOutline, LocationOnOutlined } from '@mui/icons-material';

export const Contact: React.FC = () => {
  return (
    <Box sx={{ py: 15, bgcolor: '#0f172a', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {/* Information Side */}
          <Grid item xs={12} md={5}>
            <Typography variant="overline" sx={{ color: '#3b82f6', fontWeight: 800, letterSpacing: 2 }}>
              CONTACT US
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, mt: 2 }}>
              Ready to engineer your next <Box component="span" sx={{ color: '#f57c00' }}>impact?</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#94a3b8', mb: 6, fontSize: '1.1rem' }}>
              Have a project in mind? Our team is ready to help you scale your technical infrastructure.
            </Typography>

            <Stack spacing={4}>
              {[
                { icon: <PhoneInTalk />, label: 'Call Us', val: '+91 98765 43210' },
                { icon: <MailOutline />, label: 'Email', val: 'hello@gbmsofttech.com' },
                { icon: <LocationOnOutlined />, label: 'Office', val: 'Tech Park, Bangalore, India' }
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={3} alignItems="center">
                  <Box sx={{ p: 2, borderRadius: '50%', bgcolor: alpha('#fff', 0.05), color: '#3b82f6' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700 }}>{item.label}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.val}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Form Side */}
          <Grid item xs={12} md={7}>
            <Box sx={{ bgcolor: '#1e293b', p: { xs: 4, md: 6 }, borderRadius: '32px' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name" variant="filled" sx={{ bgcolor: alpha('#fff', 0.05), borderRadius: 1 }} InputLabelProps={{ style: { color: '#94a3b8' } }} inputProps={{ style: { color: '#fff' } }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" variant="filled" sx={{ bgcolor: alpha('#fff', 0.05), borderRadius: 1 }} InputLabelProps={{ style: { color: '#94a3b8' } }} inputProps={{ style: { color: '#fff' } }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" variant="filled" sx={{ bgcolor: alpha('#fff', 0.05), borderRadius: 1 }} InputLabelProps={{ style: { color: '#94a3b8' } }} inputProps={{ style: { color: '#fff' } }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="How can we help?" variant="filled" sx={{ bgcolor: alpha('#fff', 0.05), borderRadius: 1 }} InputLabelProps={{ style: { color: '#94a3b8' } }} inputProps={{ style: { color: '#fff' } }} />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" endIcon={<Send />} sx={{ 
                    py: 2, borderRadius: '12px', bgcolor: '#f57c00', fontWeight: 800, fontSize: '1rem',
                    '&:hover': { bgcolor: '#e66d00' }
                  }}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};