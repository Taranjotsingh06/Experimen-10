import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="chat-container">
        <h2>Live Chat</h2>
        <Chat />
      </div>
    </div>
  );
}

export default App;