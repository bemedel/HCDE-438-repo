import { useState } from "react";
import "./NamePicker.css"

function NamePicker(props) {
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState("")
    // The logic will be quite similar to our TextInput component!
    function sendName() {
        props.sendUsername(name);
        setName("");
      }
    function onKeyPress(e) {
        if (e.key === "Enter") {
            sendName();
        }
    }

    return (
        <div className="hold">
            <input 
            className="text-input2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={onKeyPress}/>
            <button className="test-b" onClick={sendName}></button>
        </div>
    );
}
export default NamePicker;