import { Box, Container as MuiContainer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(7, 0)
  }
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6)
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  maxWidth: 1200,
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

export const CardGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr"
  }
}));

export const TwoColumn = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(6),
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));
