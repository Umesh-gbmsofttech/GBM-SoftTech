import { Card, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SoftCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[1],
  height: "100%",
  backgroundColor: theme.palette.background.paper
}));

export const HoverCard = styled(SoftCard)(({ theme }) => ({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: theme.shadows[2]
  }
}));

export const IconBadge = styled(Box)(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[1]
}));

export const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${
    theme.palette.secondary.main
  })`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1.2, 4),
  borderRadius: 999,
  "&:hover": {
    opacity: 0.92,
    background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${
      theme.palette.secondary.main
    })`
  }
}));

export const Pill = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.6, 1.8),
  borderRadius: 999,
  fontSize: "0.75rem",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText
}));

export const MutedText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary
}));
