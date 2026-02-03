import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@components/ui/Section";


const FooterWrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  borderTop: `1px solid ${theme.palette.divider}`
}));

const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2)
}));

export const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterGrid>
          <Box>
            <Typography variant="h6">GBM SoftTech</Typography>
            <Typography variant="body2" color="text.secondary">
              Building products, platforms, and digital experiences that help teams move faster.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Office</Typography>
            <Typography variant="body2" color="text.secondary">
              Pune, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              gbmsofttech@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +91 87660 78570
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Working Hours</Typography>
            <Typography variant="body2" color="text.secondary">
              Monday - Saturday
            </Typography>
            <Typography variant="body2" color="text.secondary">
              10:00 AM - 07:00 PM
            </Typography>
          </Box>
        </FooterGrid>
        <FooterDivider />
        <Typography variant="caption" color="text.secondary">
          � 2026 GBM SoftTech. All rights reserved.
        </Typography>
      </Container>
    </FooterWrap>
  );
};
