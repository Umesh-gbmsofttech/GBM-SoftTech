// @ts-nocheck
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { routeConfig } from "@routes/routeConfig";
import logo from "@assets/gbm-logo1.png";

const MotionButton = motion(Button);

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
  const [mobileNavAnchor, setMobileNavAnchor] =
    useState<null | HTMLElement>(null);

  const handleMobileNavOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setMobileNavAnchor(event.currentTarget);

  const handleMobileNavClose = () => setMobileNavAnchor(null);

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
          {/* Logo */}
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: 1 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <LogoWrap to="/">
              <LogoImage src={logo} alt="GBM SoftTech Logo" />
            </LogoWrap>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              justifyContent: "center",
            }}
          >
            {routeConfig.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                active={location.pathname === route.path}
              >
                {route.name}
              </NavLink>
            ))}
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              flex: { xs: "0 0 auto", md: 1 },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleMobileNavOpen}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#1a1a1a",
                border: `1px solid ${alpha("#000000", 0.08)}`,
                borderRadius: "10px",
                bgcolor: alpha("#ffffff", 0.9),
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* 🔥 Animated Contact Button */}
            <MotionButton
              component={Link}
              to="/contact"
              variant="contained"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 25px rgba(2,74,168,0.5)",
              }}
              whileTap={{ scale: 0.96 }}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                display: { xs: "none", sm: "inline-flex" },
                background: "linear-gradient(135deg, #024aa8, #0466d6)",
                boxShadow: "0 4px 14px rgba(2,74,168,0.3)",
                position: "relative",
                overflow: "hidden",

                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                  transform: "skewX(-20deg)",
                  animation: "shine 2.5s infinite",
                },

                "@keyframes shine": {
                  "0%": { left: "-75%" },
                  "100%": { left: "125%" },
                },

                "&:hover": {
                  background: "linear-gradient(135deg, #023e91, #0353b5)",
                },
              }}
            >
              Start Project
            </MotionButton>

            {/* Mobile Menu */}
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
                >
                  {route.name}
                </MenuItem>
              ))}

              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleMobileNavClose}
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                Contact Us
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </GlassBar>

      {/* Spacer */}
      <Toolbar />
    </motion.div>
  );
};