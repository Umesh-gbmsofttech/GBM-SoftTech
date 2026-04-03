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
}));

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ theme, active }) => ({
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
}));

const LogoWrap = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.2),
  textDecoration: "none",
}));

const LogoImage = styled("img")({
  width: 70,
  height: 70,
  objectFit: "contain",
});

// --- Main Component ---

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
      transition={{ duration: 0.4 }}
    >
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
    </motion.div>
  );
};