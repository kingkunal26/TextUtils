import "./App.css";
import React, {useState} from 'react'
import About from "./components/About";
import NavbarJs from "./components/Navbar";
import TexthtmlForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
export default function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message, 
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
     
    <Router>
      <NavbarJs mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TexthtmlForm heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      </div>
    </Router>
  
  );
}

// export default App;
