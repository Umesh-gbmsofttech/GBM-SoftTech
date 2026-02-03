import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useAppSelector } from "@hooks/useAppSelector";
import { buildTheme } from "@theme/index";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
