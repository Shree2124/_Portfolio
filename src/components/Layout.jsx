import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        marginTop: "64px",
        padding: "1rem",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
