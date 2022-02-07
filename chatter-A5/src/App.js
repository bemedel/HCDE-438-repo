import "./App.css";
import { useState } from "react"; 
import TextInput from "./Text-Input";
import Camera from 'react-snap-pic'
import NamePicker from "./NamePicker";

function App() {
  {/*Updates the variable messages with whatever the user types -> sent to the text-input component*/}
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    setMessages([text, ...messages]);
  }

  const [showCamera, setShowCamera] = useState(false);
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
  }



  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
        <NamePicker />
      </header>
      {/*Turns on the camera when button is clicked*/}
      {showCamera && <Camera takePicture={takePicture} />}
      {/*Contains all chat bubbles for styling purposes*/}
      <div className="messages">
        {messages.map((text) => {
          return <div className="message"> {text} </div>
        })}
      </div>
      <TextInput sendMessage={sendMessage} 
         showCamera={()=>setShowCamera(true)}/> {/*Visualizes the messages into message bubble*/}
    </div>
  );
}


export default App;