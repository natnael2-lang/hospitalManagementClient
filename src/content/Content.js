import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ContentArchive from "./Component/ContentArchive";
import Card from "./components/card";
import CreateRemove from "./components/CreateRemove";
import Footpage from "./components/Footpage";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import videoGif from "./images/hospital-gif.gif";
import visualImage from "./images/image-image.png";
import textOnly from "./images/textonly.jpg";
function App() {

  const [isSelected, setIsSelected] = useState(false)
  const handleClick= ()=>{
    setIsSelected(!isSelected)
  }
  return (
    <div className="App">
     
       
     <Navbar />
        <Routes>
          <Route path='/' element={
          <>
          <Notification />
        <CreateRemove handleClick={handleClick}/>

          {
            isSelected? 
            (<div className="card-display">
            <Card className="check" type="Text" isVisible = {false} image={textOnly}/>
            <Card className="check" type="Image" isVisible = {true} image={visualImage}/>
            <Card className="check" type="Video" isVisible = {true} image={videoGif}/>
          </div>): ""
          }</>}></Route> 
          <Route path='/CONTENT' element={<ContentArchive/>}></Route>
         
        </Routes>
 
      <Footpage />

    </div>
  );
}

export default App;
