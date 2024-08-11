import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Toast from "./components/Toast";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [toast, setToast] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const showToast = (message, type) => {
    setToast({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303853";
      showAlert("Dark mode has been enabled", "success");
      showToast("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
        // document.title = "TextUtils is Amazing Mode";
      // },2000);
      // setInterval(()=>{
        // document.title = "Install TextUtils Now";
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      showToast("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <Toast toast={toast} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}/>
        <Route exact path="/about" element={<About  mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
