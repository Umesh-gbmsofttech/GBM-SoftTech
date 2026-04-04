import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const buildTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode: 'light', // Force light for a bright theme
      primary: {
        main: "#00A3E0", // GBM Blue
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#FF3B30", // GBM Red
      },
      background: {
        default: "#FFFFFF",
        paper: "#F8F9FA",
      },
      text: {
        primary: "#1A1A1A",
        secondary: "#5F6368",
      },
      divider: "rgba(0, 0, 0, 0.08)",
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h3: { fontWeight: 800, color: "#1A1A1A" },
      h4: { fontWeight: 700, color: "#1A1A1A" },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#FFFFFF",
            // Subtle professional glow instead of dark gradients
            backgroundImage: "radial-gradient(at 50% 0%, rgba(0, 163, 224, 0.05) 0%, transparent 50%)",
            backgroundAttachment: "fixed",
            color: "#1A1A1A",
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 99, // Pill shape as per your design
            textTransform: "none",
            fontWeight: 700,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};