import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, updateNotes] = useState([]);
  const [key, updateKey] = useState(0);

  function addNewNote(title, content) {
    const newNote = {
      key: key,
      title: title,
      content: content,
    };
    console.log(notesList);

    updateNotes((prev) => [...prev, newNote]);
    updateKey(key + 1);
  }
  function deleteNote(id) {
    console.log("delete triggered" + id);
    updateNotes((prev) => prev.filter((delNote) => delNote.key != id));
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={addNewNote} />
      {notesList.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          id={noteItem.key}
          checkDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
