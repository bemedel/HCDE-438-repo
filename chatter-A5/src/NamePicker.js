import { useState } from "react";
import "./NamePicker.css"
import { FiEdit } from "react-icons/fi";

function NamePicker(props) {
    //this is the state of the name itself
    const [name, setName] = useState("")
    //this is a toggle between showing and hiding the input
    const [editName, setEditName] = useState(false)
    // The logic will be quite similar to our TextInput component!

    //function toggle() {
       // setEditName(!editName);
    
    function ok() {
        props.setUsername(name);
        setEditName(false);
    }
    
    if (editName) {
        return (
            <div className="name-picker">
                <input className="name-picker-input"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button className="name-picker-button" onClick={ok}>OK</button>
            </div>
        );
    }

    //() => makes it an inline function
    return (
        <div className="name-picker">
            <span className="name-picker-name"> {name || "Set Username:"}</span>
            <FiEdit size="24" onClick={() => setEditName(true)} />
        </div>
    );
}
export default NamePicker;