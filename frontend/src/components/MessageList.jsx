import { useEffect, useRef } from "react";

function MessageList({ messages, username }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${msg.sender === username ? "own" : ""}`}
        >
          <span className="sender">
            {msg.sender === username ? "You" : msg.sender}
          </span>
          <p>{msg.content}</p>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default MessageList;