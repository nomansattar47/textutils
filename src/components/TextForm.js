import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase button clicked!!!");
    let newText = text.toUpperCase();
    setText(newText);
    
  };
  const handleLoClick = () => {
    // console.log("UpperCase button clicked!!!");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCtClick = () => {
    // console.log("Clear text clicked!!!");
    setText("");
  };
  const handleCtCbClick = (event) => {
    // console.log("Copy to clipboard button clicked!!!");
    const textArea = document.getElementById("myBox");
    
    // console.log("Copy to clipboard::",textArea.value);
    navigator.clipboard.writeText(textArea.value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        props.showAlert("Text has been copy to clipboard!","success");
      }, function(err) {
        console.error("Async: Could not copy text: ", err);
      });
  };
  const handleRemoveExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnchange = (event) => {
    // console.log("my text have been changed!");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //setText("my text have been changed!");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="container">
          <h4>{props.heading}</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnchange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCtCbClick}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCtClick}>
            Clear Text
          </button>
        </div>
        <div className="container my-2">
          <h4>Your text summary</h4>
          <p>
            {text.length > 0 ? text.split(" ").length : 0} <b>words</b>,{" "}
            {text.length} <b>characters</b>
          </p>
          <p>
            <b>{0.008 * text.split(" ").length}</b> minutes to read
          </p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
