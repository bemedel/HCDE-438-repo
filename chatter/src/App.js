import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
      </header>
      {/*Contains all chat bubbles for styling purposes*/}
      <div className="chat-container"> 
        <div className="chat-bubble"> {/*first chat bubble*/}
          hello this is a message
        </div>
        <div className="chat-bubble"> {/*second chat bubble*/}
          hi
        </div>
        <div className="chat-bubble"> {/*third chat bubble*/}
          yup
        </div>
      </div>
      <footer className="footer"> {/* this has the text box and send button*/}
        <input className="text-input" />
        <button className="send">
        </button>
      </footer>
    </div>
  );
}


export default App;