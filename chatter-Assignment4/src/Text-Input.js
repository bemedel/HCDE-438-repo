import "./Text-input.css";
import { useState } from "react";

{/*Uses text from user, visualizes it on screen, and clears text input box*/}
function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}></button>
    </footer>
  );
}

export default TextInput;