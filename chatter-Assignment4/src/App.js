import "./App.css";
import { useState } from "react"; 
import TextInput from "./Text-Input";

function App() {
  {/*Updates the variable messages with whatever the user types -> sent to the text-input component*/}
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    setMessages([text, ...messages]);
  }
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
      </header>
      {/*Contains all chat bubbles for styling purposes*/}
      <div className="messages">
        {messages.map((text) => {
          return <div className="message"> {text} </div>
        })}
      </div>
      <TextInput sendMessage={sendMessage} /> {/*Visualizes the messages into message bubble*/}
    </div>
  );
}


export default App;