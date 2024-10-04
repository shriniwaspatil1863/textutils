
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const removeclasses = () => {

    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    
  }
  const togglemode = (color,btncolor,fontcolor) => {
    removeclasses();
    document.body.classList.add('bg-' + color)
    

    if (color === null) {
      if (Mode === 'light') {
        setMode('dark');
        let darkcolor = "#092f5d"
        document.body.style.backgroundColor = darkcolor;
        showalert("Dark mode enabled", "success");
        changebuttoncolor(color,btncolor="blue",fontcolor="white");
        document.title="Textutils-Dark Mode";
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = "white";
        showalert("light mode enabled", "success")
        changebuttoncolor(color,btncolor="blue",fontcolor="white");
        document.title="TexUtils-Light Mode"
        
      }
      // #092f5d
    }
    else{
      changebuttoncolor(color,btncolor,fontcolor); 
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


const changebuttoncolor=(color,btncolor,fontcolor)=>{
setbtncolor({
  buttoncolor:btncolor,
  fontcolor:fontcolor
})


}
const [btncolor,setbtncolor]=useState({
  buttoncolor:"blue",
  fontcolor:"white"
});

  return (
    <>
    {/* <Router> */}
      <Navbar title="TexUtils" aboutText="about Textutils" mode={Mode} togglemode={togglemode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
    
      
      <TextForm heading="Enter the text to analyze" mode={Mode} showalert={showalert} togglemode={togglemode} btncolor={btncolor} />
     
      </div>
    {/* </Router> */}


    </>
  );
}

export default App;
