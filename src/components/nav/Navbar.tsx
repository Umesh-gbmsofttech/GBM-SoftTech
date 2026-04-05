// @ts-nocheck
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import {
  LanguageOutlined,
  KeyboardArrowDownOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { routeConfig } from "@routes/routeConfig";
import logo from "@assets/gbm-logo1.png";

const GlassBar = styled(AppBar)(() => ({
  backgroundColor: alpha("#ffffff", 0.9),
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  backdropFilter: "blur(20px)",
  borderBottom: `1px solid ${alpha("#000000", 0.08)}`,
  color: "#1a1a1a",
}));

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? theme.palette.primary.main : "#5f6368",
  fontWeight: 700,
  fontSize: "0.85rem",
  lineHeight: 1.75,
  padding: theme.spacing(1, 2.5),
  borderRadius: theme.shape.borderRadius,
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#024aa8",
  },
}));

const LogoWrap = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  height: "100%",
}));

const LogoImage = styled("img")({
  height: "45px",
  width: "auto",
  display: "block",
  objectFit: "contain",
  objectPosition: "left",
  filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.05))",
});

export const Navbar = () => {
  const location = useLocation();
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const [mobileNavAnchor, setMobileNavAnchor] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("English (US)");

  const handleLangOpen = (event: React.MouseEvent<HTMLButtonElement>) => setLangAnchor(event.currentTarget);
  const handleMobileNavOpen = (event: React.MouseEvent<HTMLButtonElement>) => setMobileNavAnchor(event.currentTarget);
  const handleMobileNavClose = () => setMobileNavAnchor(null);
  const handleLangClose = (label: string) => {
    if (typeof label === "string") {
      setLanguage(label);
    }
    setLangAnchor(null);
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassBar position="fixed" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, sm: 2, md: 3 },
          }}
        >
          <Box sx={{ flex: { xs: "0 1 auto", md: 1 }, minWidth: 0, display: "flex", alignItems: "center" }}>
            <LogoWrap to="/">
              <LogoImage src={logo} alt="GBM SoftTech Logo" />
            </LogoWrap>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, justifyContent: "center" }}>
            {routeConfig.map((route) => (
              <NavLink key={route.path} to={route.path} active={location.pathname === route.path}>
                {route.name}
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              flex: { xs: "0 0 auto", md: 1 },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
              ml: { xs: "auto", md: 0 },
            }}
          >
            <IconButton
              onClick={handleMobileNavOpen}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#1a1a1a",
                border: `1px solid ${alpha("#000000", 0.08)}`,
                borderRadius: "10px",
                flexShrink: 0,
                bgcolor: alpha("#ffffff", 0.9),
              }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>

            <Button
              variant="text"
              startIcon={<LanguageOutlined sx={{ fontSize: 18 }} />}
              endIcon={<KeyboardArrowDownOutlined sx={{ fontSize: 16 }} />}
              onClick={handleLangOpen}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                color: "#1a1a1a",
                borderRadius: "8px",
                px: 2,
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              {language}
            </Button>

            <Menu
              anchorEl={mobileNavAnchor}
              open={Boolean(mobileNavAnchor)}
              onClose={handleMobileNavClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 220,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  borderRadius: "14px",
                  overflow: "hidden",
                },
              }}
            >
              {routeConfig.map((route) => (
                <MenuItem
                  key={route.path}
                  component={Link}
                  to={route.path}
                  onClick={handleMobileNavClose}
                  selected={location.pathname === route.path}
                  sx={{
                    py: 1.5,
                    fontWeight: 700,
                    color: location.pathname === route.path ? "primary.main" : "#1a1a1a",
                  }}
                >
                  {route.name}
                </MenuItem>
              ))}
            </Menu>

            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              PaperProps={{
                sx: {
                  mt: 1,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                },
              }}
            >
              <MenuItem onClick={() => handleLangClose("English (US)")} sx={{ fontWeight: 600 }}>
                English (US)
              </MenuItem>
              <MenuItem onClick={() => handleLangClose("Deutsch")} sx={{ fontWeight: 600 }}>
                Deutsch
              </MenuItem>
              <MenuItem onClick={() => handleLangClose("Francais")} sx={{ fontWeight: 600 }}>
                Francais
              </MenuItem>
              <MenuItem onClick={() => handleLangClose("Hindi")} sx={{ fontWeight: 600 }}>
                Hindi
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </GlassBar>
      <Toolbar />
    </motion.div>
  );
};
