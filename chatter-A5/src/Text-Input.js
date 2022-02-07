import "./Text-input.css";
import { useState } from "react";
import { FiSend, FiCamera} from "react-icons/fi"

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
      <button className="camera" onClick={props.showCamera}>
        <FiCamera style={{height:15, width:15}} />
      </button>
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