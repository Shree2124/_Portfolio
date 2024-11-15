import React from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/system";

// Custom styles for the Drawer NavLink
const DrawerNavLink = styled("a")(({ active }) => ({
  textDecoration: "none",
  color: active ? "#00bfa5" : "#fff",
  fontWeight: active ? "bold" : "normal",
  padding: "1rem 0",
  cursor: "pointer",
}));

const DrawerMenu = ({ sections=[], activeSection, scrollToSection, isMobileOpen, handleDrawerToggle }) => {
  return (
    <Drawer
      anchor="left"
      open={isMobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { width: "240px", backgroundColor: "#1976d2" },
      }}
    >
      <Box sx={{ padding: "1rem", color: "#fff" }}>
        <IconButton onClick={handleDrawerToggle} sx={{ alignSelf: "flex-end", color: "#fff" }}>
          <Close />
        </IconButton>
        {sections?.map((section) => (
          <DrawerNavLink
            key={section.id}
            active={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </DrawerNavLink>
        ))}
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
