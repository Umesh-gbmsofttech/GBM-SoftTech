<<<<<<< HEAD
import React from "react";
import { AppBar, Box, Toolbar, Button, Container, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { routeConfig } from "@routes/routeConfig";
import logo from "@assets/gbm-logo1.png";

// --- STYLED COMPONENTS ---

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.drawer + 1,
=======
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { 
  LanguageOutlined, 
  KeyboardArrowDownOutlined 
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { routeConfig } from "@routes/routeConfig";
import logo from "@assets/gbm-logo1.png";

// --- Styled Components ---

const GlassBar = styled(AppBar)(({ theme }) => ({
  // Forced Bright Theme
  backgroundColor: alpha("#ffffff", 0.9),
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  backdropFilter: "blur(20px)",
  borderBottom: `1px solid ${alpha("#000000", 0.08)}`,
  color: "#1a1a1a",
>>>>>>> shriram
}));

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ theme, active }) => ({
<<<<<<< HEAD
  color: active ? "#024aa8" : "#4a5568", 
  fontWeight: 600,
  fontSize: "0.95rem",
  padding: theme.spacing(1, 2),
  textTransform: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#024aa8",
  }
=======
  color: active ? theme.palette.primary.main : "#5f6368",
  fontWeight: 700,
  fontSize: "0.85rem",
  textTransform: "none",
  padding: theme.spacing(1, 2.5),
  transition: "all 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
  },
>>>>>>> shriram
}));

const LogoWrap = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
<<<<<<< HEAD
  textDecoration: "none",
  height: "100%", // Ensures it fills the toolbar height for centering
}));

/** * IMPROVED LOGO STYLING 
 * Increased height to 45px for better visibility within an 85px toolbar.
 * Used object-position to ensure it stays left-aligned.
 */
const LogoImage = styled("img")({
  height: "45px", // Increased from 32px for better clarity
  width: "auto",   // Maintain aspect ratio
  display: "block",
  objectFit: "contain",
  objectPosition: "left", 
  filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.05))", // Subtle lift for clarity
});

// --- COMPONENT ---
=======
  gap: theme.spacing(1.2),
  textDecoration: "none",
}));

const LogoImage = styled("img")({
  width: 70,
  height: 70,
  objectFit: "contain",
});

// --- Main Component ---
>>>>>>> shriram

export const Navbar = () => {
  const location = useLocation();
  
  // Language Menu State
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("English (US)");

  const handleLangOpen = (event: React.MouseEvent<HTMLButtonElement>) => setLangAnchor(event.currentTarget);
  const handleLangClose = (label: string) => {
    if (typeof label === 'string') setLanguage(label);
    setLangAnchor(null);
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
<<<<<<< HEAD
      <StyledAppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: "85px", display: 'flex', justifyContent: 'space-between' }}>
            
            {/* 1. LEFT SECTION (Logo) */}
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <LogoWrap to="/">
                <LogoImage src={logo} alt="GBM SoftTech Logo" />
              </LogoWrap>
            </Box>

            {/* 2. CENTER SECTION (Navigation) */}
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                flex: 2, 
                justifyContent: 'center',
                display: { xs: 'none', md: 'flex' } 
              }}
            >
              {routeConfig.map((route) => (
                <NavLink
                  key={route.path}
                  component={Link}
                  to={route.path}
                  active={location.pathname === route.path}
                  endIcon={route.hasSubmenu ? <KeyboardArrowDown sx={{ fontSize: '1rem' }} /> : null}
                >
                  {route.name}
                </NavLink>
              ))}
            </Stack>

            {/* 3. RIGHT SECTION (Actions) */}
            <Stack 
              direction="row" 
              spacing={2} 
              alignItems="center" 
              sx={{ flex: 1, justifyContent: 'flex-end' }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#024aa8",
                  borderRadius: "50px",
                  fontWeight: 700,
                  color:'#fff',
                  textTransform: "none",
                  px: 4,
                  py: 1.2, // Slightly more padding for a "premium" feel
                  fontSize: "0.95rem",
                  boxShadow: "none",
                  whiteSpace: 'nowrap',
                  "&:hover": { 
                    bgcolor: "#024aa8",
                    boxShadow: "0px 4px 15px rgba(100, 113, 232, 0.3)" 
                  }
                }}
              >
                Contact Us
              </Button>
            </Stack>

          </Toolbar>
        </Container>
      </StyledAppBar>
=======
      <GlassBar position="fixed" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* LEFT SIDE: Brand Logo */}
          <Box sx={{ flex: 1, display: 'flex' }}>
            <LogoWrap to="/">
              <LogoImage src={logo} alt="GBM Logo" />
              <Box>
                
              </Box>
            </LogoWrap>
          </Box>

          {/* CENTER: Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
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
          </Box>

          {/* RIGHT SIDE: Language Selection */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="text"
              startIcon={<LanguageOutlined sx={{ fontSize: 18 }} />}
              endIcon={<KeyboardArrowDownOutlined sx={{ fontSize: 16 }} />}
              onClick={handleLangOpen}
              sx={{ 
                textTransform: 'none', 
                fontWeight: 700, 
                color: '#1a1a1a',
                borderRadius: '8px',
                px: 2
              }}
            >
              {language}
            </Button>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              PaperProps={{
                sx: { mt: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '12px' }
              }}
            >
              <MenuItem onClick={() => handleLangClose("English (US)")} sx={{ fontWeight: 600 }}>English (US)</MenuItem>
              <MenuItem onClick={() => handleLangClose("Deutsch")} sx={{ fontWeight: 600 }}>Deutsch</MenuItem>
              <MenuItem onClick={() => handleLangClose("Français")} sx={{ fontWeight: 600 }}>Français</MenuItem>
              <MenuItem onClick={() => handleLangClose("हिन्दी")} sx={{ fontWeight: 600 }}>हिन्दी</MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </GlassBar>
      {/* Spacer to push page content below the fixed header */}
      <Toolbar sx={{ mb: 2 }} /> 
>>>>>>> shriram
    </motion.div>
  );
};