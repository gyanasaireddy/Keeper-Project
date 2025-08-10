// App.jsx
import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, updateNotes] = useState([]);
  const [key, updateKey] = useState(0);
  const [noteToEdit, setNoteToEdit] = useState(null);

  function addOrUpdateNote(title, content) {
    if (noteToEdit) {
      // Update existing note
      updateNotes((prev) =>
        prev.map((note) =>
          note.key === noteToEdit.key
            ? { ...note, title, content }
            : note
        )
      );
      setNoteToEdit(null);
    } else {
      // Add new note
      const newNote = { key: key, title, content };
      updateNotes((prev) => [...prev, newNote]);
      updateKey((prev) => prev + 1);
    }
  }

  function deleteNote(id) {
    updateNotes((prev) => prev.filter((note) => note.key !== id));
  }

  function editNote(id) {
    const note = notesList.find((n) => n.key === id);
    if (note) {
      setNoteToEdit(note);
    }
  }

  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      {/* Scrollable middle */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 2 }}>
        <Container maxWidth="md">
          <CreateArea newNote={addOrUpdateNote} editNoteData={noteToEdit} />
          <Grid container spacing={2} sx={{ mt: 3, mb: 5 }}>
            {notesList.map((noteItem) => (
              <Grid item xs={12} sm={6} md={4} key={noteItem.key}>
                <Note
                  title={noteItem.title}
                  content={noteItem.content}
                  id={noteItem.key}
                  checkDelete={deleteNote}
                  checkEdit={editNote}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
