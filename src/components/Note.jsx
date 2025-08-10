import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Note({ title, content, id, checkDelete, checkEdit }) {
  return (
    <Card
      sx={{
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
          width: 250,
          m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, whiteSpace: "pre-wrap" }}>
          {content}
        </Typography>
      </CardContent>

      {/* Action bar at bottom */}
      <Box
        sx={{
          display: "flex",
          borderTop: "1px solid #eee",
        }}
      >
        <IconButton
          sx={{
            color: "#1976d2",
            flex: 1,
            borderRadius: 0, // removes the circle
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.1)", // rectangular hover
            },
          }}
          onClick={() => checkEdit(id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "#d32f2f",
            flex: 1,
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "rgba(211, 47, 47, 0.1)",
            },
          }}
          onClick={() => checkDelete(id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default Note;
