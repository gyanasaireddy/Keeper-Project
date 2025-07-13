import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";


function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [initial, setInitial] = useState(false);

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
    props.newNote(title, content);
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
          <Collapse in={initial} >
            <Fade in={initial}>
              <Fab
                type="submit"
                style={initial ? {} : { display: "none" }}
                className="btn liquid"
              >
                <span style={{display:'flex'}}>
                  
                  <AddIcon />
                </span>
              </Fab>
            </Fade>
          </Collapse>
        </form>
      </Zoom>
    </div>
  );
}

export default CreateArea;
