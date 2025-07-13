import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import Alert from "@mui/material/Alert";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [initial, setInitial] = useState(false);
  const [error, setError] = useState(false);

  function handleChangeTitle(event) {
    let { value } = event.target;
    setTitle(value);
  }

  function handleChangeContent(event) {
    let { value } = event.target;
    setContent(value);
  }
  function adda(event) {
    event.preventDefault();
    if (title != "" && content != "") props.newNote(title, content);
    else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 10000);
    }

    setContent("");
    setTitle("");
  }
  function initialRender() {
    setInitial(true);
  }

  return (
    <div>
      <Zoom in={true}>
        <form onSubmit={adda} className="create-note">
          <Collapse in={initial}>
            <input
              name="title"
              placeholder="Title"
              onChange={handleChangeTitle}
              value={title}
              style={initial ? { display: "block" } : { display: "none" }}
            />
          </Collapse>

          <TextareaAutosize
            onClick={initialRender}
            name="content"
            placeholder="Take a note..."
            rows="3"
            onChange={handleChangeContent}
            value={content}
            minRows={initial ? 3 : 1}
          />
          <Collapse in={initial}>
            <Fade in={initial}>
              <Fab
                type="submit"
                style={initial ? {} : { display: "none" }}
                className="btn liquid"
              >
                <span style={{ display: "flex" }}>
                  <AddIcon />
                </span>
              </Fab>
            </Fade>
          </Collapse>
        </form>
      </Zoom>
      <div className="error">
        <Fade in={error}>
          <Alert severity="error" size="small" variant="outlined">
            Enter Title and Content{" "}
          </Alert>
        </Fade>
      </div>
    </div>
  );
}

export default CreateArea;
