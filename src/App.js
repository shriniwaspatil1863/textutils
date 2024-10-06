
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const removeclasses = () => {

    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");

  }
  const togglemode = (color, btncolor, fontcolor) => {
    removeclasses();
    document.body.classList.add('bg-' + color)


    if (color === null) {
      if (Mode === 'light') {
        setMode('dark');
        let darkcolor = "#092f5d"
        document.body.style.backgroundColor = darkcolor;
        showalert("Dark mode enabled", "success");
        changebuttoncolor(color, btncolor = "blue", fontcolor = "white");
        changetextcolor("white");
        changeaboutcolor(color = "white", fontcolor = "#088cab");

      }
      else {
        setMode('light');
        document.body.style.backgroundColor = "white";
        showalert("light mode enabled", "success")
        changebuttoncolor(color, btncolor = "blue", fontcolor = "white");
        changetextcolor("black");
        changeaboutcolor(color = "black", fontcolor = "white")


      }
      // #092f5d
    }
    else {
      changebuttoncolor(color, btncolor, fontcolor);
      changetextcolor("black");
      changeaboutcolor(fontcolor, btncolor)
    }


  };



  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {

    setalert({

      msg: message,
      type: type
    })
    setTimeout(() => {

      setalert(null)


    }, 1500);
  };


  const changebuttoncolor = (color, btncolor, fontcolor) => {
    setbtncolor({
      buttoncolor: btncolor,
      fontcolor: fontcolor
    })


  }
  const [btncolor, setbtncolor] = useState({
    buttoncolor: "blue",
    fontcolor: "white"
  });

  const [textcolor, settextcolor] = useState("black");

  const changetextcolor = (color) => {

    settextcolor(color)

  }

  const [aboutcolor, setaboutcolor] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const changeaboutcolor = (color, backgroundColor) => {

    setaboutcolor({
      color: color,
      backgroundColor: backgroundColor
    })
  }
  const [text,setText]=useState('');
  return (
    <Router>


      <Navbar title="TexUtils" aboutText="about Textutils" mode={Mode} togglemode={togglemode} />
      <Alert alert={alert} />


      <div className="container my-3">
        <Routes>

          <Route
            path="/textform"
            element={<TextForm heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={Mode} showalert={showalert} togglemode={togglemode} btncolor={btncolor} textcolor={textcolor} setText={setText} text={text}/>}
          />
          <Route
            path="/about"
            element={<About togglemode={togglemode} mode={Mode} aboutcolor={aboutcolor} />}
          />
        </Routes>
      </div>




    </Router>
  );
}

export default App;
