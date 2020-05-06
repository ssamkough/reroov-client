import React from "react";

import "../styles/Input.css";

const Input = ({
  message,
  setMessage,
  sendMessage,
}: {
  message: string;
  setMessage: any;
  sendMessage: any;
}) => {
  return (
    <form>
      <input
        className="input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
