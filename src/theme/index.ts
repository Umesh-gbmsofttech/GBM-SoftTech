import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./tokens";
import { typography } from "./typography";
import { customShadows } from "./shadows";

export const buildTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    ...getDesignTokens(mode),
    typography,
    spacing: 8,
    shadows: customShadows,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              mode === "light"
                ? "radial-gradient(circle at top, rgba(27, 77, 255, 0.08), transparent 45%), radial-gradient(circle at 20% 20%, rgba(90, 210, 255, 0.12), transparent 35%)"
                : "radial-gradient(circle at top, rgba(90, 210, 255, 0.08), transparent 45%), radial-gradient(circle at 20% 20%, rgba(27, 77, 255, 0.15), transparent 35%)",
            backgroundAttachment: "fixed"
          }
        }
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 999
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none"
          }
        }
      }
    }
  });

  theme = responsiveFontSizes(theme);
  return theme;
};
