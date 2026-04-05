// @ts-nocheck
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Stack, 
  alpha, 
  Button,
  Divider
} from '@mui/material';
import { 
  SchoolOutlined, 
  BuildOutlined, 
  Launch,
  VerifiedUserOutlined,
  BarChartOutlined,
  HubOutlined
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'skillmate',
    name: 'Skillmate',
    type: 'B2B TALENT PIPELINE',
    title: 'Enterprise-Ready Engineering Talent.',
    description: 'Reduce your onboarding overhead. We provide SMEs with pre-vetted, industry-aligned engineers trained specifically for high-growth technical environments.',
    icon: <SchoolOutlined />,
    color: '#3b82f6',
    stats: [
      { label: 'SME Partners', value: '120+' },
      { label: 'Avg. Retention', value: '94%' },
    ],
    features: ["Pre-vetted Technical Staff", "Custom Training Modules", "Direct Hire Pipeline"]
  },
  {
    id: 'mygarage',
    name: 'MyGarage',
    type: 'LOGISTICS INFRASTRUCTURE',
    title: 'Fleet Maintenance, Simplified.',
    description: 'A centralized dashboard for SME fleet owners to manage maintenance, track service transparency, and minimize vehicle downtime through our verified network.',
    icon: <BuildOutlined />,
    color: '#3b82f6',
    stats: [
      { label: 'Fleet Efficiency', value: '+22%' },
      { label: 'Service Hubs', value: '500+' },
    ],
    features: ["Real-time Telemetry", "Unified Invoicing", "Preventative Maintenance"]
  }
];

export const Products: React.FC = () => {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", backgroundColor: "#ffffff", color: "#0f172a" }}>
      <Container maxWidth="lg">
        
        {/* SECTION HEADER - Trust-Focused */}
        <Grid container spacing={4} sx={{ mb: 10 }} alignItems="flex-end">
          <Grid item xs={12} md={7}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <HubOutlined sx={{ color: '#3b82f6', fontSize: 20 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: 2, color: '#3b82f6' }}>
                BUSINESS ECOSYSTEM
              </Typography>
            </Stack>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
              Solutions built for <br />
              <Box component="span" sx={{ color: '#64748b' }}>operational excellence.</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', borderLeft: '3px solid #e2e8f0', pl: 3, mb: 1 }}>
              Supporting small and medium enterprises with scalable infrastructure and high-performance talent.
            </Typography>
          </Grid>
        </Grid>

        {/* PRODUCT ARCHITECTURE */}
        <Stack spacing={6}>
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                borderRadius: "24px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                transition: "0.3s ease-in-out",
              }}>
                <Grid container>
                  {/* Left Branding Strip */}
                  <Grid item xs={12} md={0.5} sx={{ bgcolor: product.color, display: { xs: 'none', md: 'block' } }} />

                  {/* Main Content Area */}
                  <Grid item xs={12} md={11.5}>
                    <Grid container sx={{ p: { xs: 4, md: 6 } }}>
                      <Grid item xs={12} md={7}>
                        <Stack spacing={3}>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <div style={{
                              padding: "12px",
                              borderRadius: "12px",
                              backgroundColor: alpha(product.color, 0.1),
                              color: product.color,
                              display: "flex",
                              alignItems: "center",
                            }}>
                              {product.icon}
                            </div>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e293b' }}>
                              {product.name}
                            </Typography>
                            <Divider orientation="vertical" flexItem sx={{ height: 20, my: 'auto' }} />
                            <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748b', letterSpacing: 1 }}>
                              {product.type}
                            </Typography>
                          </Stack>

                          <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                            {product.title}
                          </Typography>

                          <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '90%' }}>
                            {product.description}
                          </Typography>

                          <Grid container spacing={3} sx={{ pt: 2 }}>
                            {product.stats.map((s) => (
                              <Grid item key={s.label}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                  <BarChartOutlined sx={{ fontSize: 18, color: '#94a3b8' }} />
                                  <div>
                                    <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>{s.value}</Typography>
                                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>{s.label}</Typography>
                                  </div>
                                </Stack>
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                      </Grid>

                      {/* Utility Side Panel */}
                      <Grid item xs={12} md={5} sx={{ mt: { xs: 4, md: 0 }, pl: { md: 6 }, borderLeft: { md: '1px solid #e2e8f0' } }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 3, color: '#94a3b8' }}>
                          ENTERPRISE FEATURES
                        </Typography>
                        <Stack spacing={2} sx={{ mb: 5 }}>
                          {product.features.map((f) => (
                            <Stack key={f} direction="row" spacing={1.5} alignItems="center">
                              <VerifiedUserOutlined sx={{ fontSize: 18, color: product.color }} />
                              <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>{f}</Typography>
                            </Stack>
                          ))}
                        </Stack>
                        
                        <Button 
                          variant="contained" 
                          disableElevation
                          endIcon={<Launch className="cta-icon" sx={{ transition: '0.2s' }} />}
                          sx={{ 
                            bgcolor: '#0f172a', 
                            color: '#fff', 
                            py: 1.5, px: 4, 
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontWeight: 700,
                            '&:hover': { bgcolor: product.color }
                          }}
                        >
                          Access Partner Portal
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </div>
  );
};
