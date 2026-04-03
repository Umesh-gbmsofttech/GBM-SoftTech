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
}));

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ theme, active }) => ({
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
}));

const LogoWrap = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
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

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};