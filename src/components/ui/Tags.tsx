import { Chip, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TagChip = styled(Chip)(({ theme }) => ({
  borderRadius: 999,
  fontWeight: 600,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`
}));

export const StatRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const StatCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1]
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700
}));
