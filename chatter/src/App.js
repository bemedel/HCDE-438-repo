import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
      </header>
      <div className="chat-container">
        <div className="chat-bubble">
          hello this is a message
        </div>
        <div className="chat-bubble">
          hi
        </div>
        <div className="chat-bubble">
          yup
        </div>
      </div>
      <footer className="footer">
        <input className="text-input" />
        <button className="send">
        </button>
      </footer>
    </div>
  );
}


export default App;