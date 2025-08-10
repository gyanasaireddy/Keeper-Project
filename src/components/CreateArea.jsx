import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab, Zoom, TextField, Collapse, Fade, Alert, Box } from "@mui/material";

function CreateArea({ newNote, editNoteData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [initial, setInitial] = useState(false);
  const [error, setError] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (editNoteData) {
      setTitle(editNoteData.title);
      setContent(editNoteData.content);
      setIsEditMode(true);
      setInitial(true);
    } else {
      setIsEditMode(false);
    }
  }, [editNoteData]);

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() && content.trim()) {
      newNote(title, content);
      setTitle("");
      setContent("");
      setIsEditMode(false);
      setInitial(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Zoom in={true}>
        <form onSubmit={handleSubmit}>
          <Collapse in={initial}>
            <TextField
              fullWidth
              variant="outlined"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#1565c0" },
                  "&:hover fieldset": { borderColor: "#0d47a1" }
                },
                "& label.Mui-focused": { color: "#1565c0" }
              }}
            />
          </Collapse>
          <TextField
            fullWidth
            variant="outlined"
            label="Take a note..."
            multiline
            minRows={initial ? 3 : 1}
            value={content}
            onClick={() => setInitial(true)}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#1565c0" },
                "&:hover fieldset": { borderColor: "#0d47a1" }
              },
              "& label.Mui-focused": { color: "#1565c0" }
            }}
          />
          <Collapse in={initial}>
            <Fade in={initial}>
              <Fab
                type="submit"
                size="medium"
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: 10,
                  bgcolor: "#1565c0",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#0d47a1"
                  }
                }}
              >
                {isEditMode ? <EditIcon /> : <AddIcon />}
              </Fab>
            </Fade>
          </Collapse>
        </form>
      </Zoom>
      <Fade in={error}>
        <Alert severity="error" sx={{ mt: 2 }}>
          Enter Title and Content
        </Alert>
      </Fade>
    </Box>
  );
}

export default CreateArea;
