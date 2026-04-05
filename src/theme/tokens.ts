import { PaletteMode } from "@mui/material";

export const brand = {
  ink: "#0b1023",
  cloud: "#f7f8fc",
  ocean: "#024aa8",
  sky: "#024aa8",
  ember: "#024aa8",
  moss: "#20c997",
  stone: "#6b7280",
  midnight: "#05070f"
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? brand.ocean : brand.ember,
      contrastText: mode === "light" ? "#ffffff" : brand.ink
    },
    secondary: {
      main: brand.ocean
    },
    background: {
      default: mode === "light" ? brand.cloud : brand.midnight,
      paper: mode === "light" ? "#ffffff" : "#202a45"
    },
    text: {
      primary: mode === "light" ? brand.ink : "#e9ecf8",
      secondary: mode === "light" ? brand.stone : "#202021"
    },
    success: { main: brand.moss },
    divider: mode === "light" ? "#e5e7eb" : "#415074"
  },
  shape: {
    borderRadius: 18
  }
});