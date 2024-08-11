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
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard!","success");
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
          <h4 className="mb-3">{props.heading}</h4>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnchange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "#474a59" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCtCbClick}
          >
            Copy to Clipboard
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCtClick}>
            Clear Text
          </button>
        </div>
        <div className="container my-2">
          <h4>Your text summary</h4>
          <p>
            {text.length > 0 ? text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length : 0} <b>words</b>,{" "}
            {text.length} <b>characters</b>
          </p>
          <p>
            <b>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0 }).length}</b> minutes to read
          </p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
