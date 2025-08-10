import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1565c0",borderRadius:2 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <NotesIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ fontFamily: "'McLaren', cursive", fontWeight: 200 }}>
          Keeper
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
