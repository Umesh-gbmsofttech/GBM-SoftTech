import { PaletteMode } from "@mui/material";

export const brand = {
  ink: "#0b1023",
  cloud: "#f7f8fc",
  ocean: "#1b4dff",
  sky: "#5ad2ff",
  ember: "#ff6b3d",
  moss: "#20c997",
  stone: "#6b7280",
  midnight: "#05070f"
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? brand.ocean : brand.sky,
      contrastText: mode === "light" ? "#ffffff" : brand.ink
    },
    secondary: {
      main: brand.ember
    },
    background: {
      default: mode === "light" ? brand.cloud : brand.midnight,
      paper: mode === "light" ? "#ffffff" : "#0b1224"
    },
    text: {
      primary: mode === "light" ? brand.ink : "#e9ecf8",
      secondary: mode === "light" ? brand.stone : "#b8c0d9"
    },
    success: { main: brand.moss },
    divider: mode === "light" ? "#e5e7eb" : "#1f2a44"
  },
  shape: {
    borderRadius: 18
  }
});
