import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { toggleMode } from "@features/theme/themeSlice";
import { routeConfig } from "@routes/routeConfig";
import logo from "@assets/gbm-logo1.png";

const GlassBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  backdropFilter: "blur(12px)",
  borderBottom: `1px solid ${theme.palette.divider}`
}));

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: "0.85rem",
  padding: theme.spacing(1, 2)
}));

const LogoWrap = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // gap: theme.spacing(1.4),
  textDecoration: "none"
}));

const LogoImage = styled("img")(({ theme }) => ({
  width: 80,
  height: 20,
  // borderRadius: 10,
  objectFit: "cover",
  boxShadow: theme.shadows[1]
}));

const NavActions = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  gap: theme.spacing(1.5),
  alignItems: "center"
}));

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const location = useLocation();

  return (
    <GlassBar
      position="sticky"
      color="default"
      elevation={0}
      component={motion.div}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Toolbar>
        <LogoWrap to="/">
          <LogoImage src={logo} alt="GBM SoftTech" />
          <Typography variant="h6" color="text.primary">
            SoftTech
          </Typography>
        </LogoWrap>
        <NavActions>
          {routeConfig.map((route) => (
            <NavLink
              key={route.path}
              component={Link}
              to={route.path}
              active={location.pathname === route.path}
            >
              {route.name}
            </NavLink>
          ))}
          <IconButton onClick={() => dispatch(toggleMode())} color="inherit">
            {mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>
        </NavActions>
      </Toolbar>
    </GlassBar>
  );
};
