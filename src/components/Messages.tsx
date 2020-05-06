import React from "react";

import "../styles/Messages.css";
import Message from "./Message";

const Messages = ({ messages, name }: { messages: any; name: string }) => {
  return (
    <div className="messages">
      {messages.map((message: string, i: number) => (
        <div key={i}>
          <Message message={message} name={name}></Message>
        </div>
      ))}
    </div>
  );
};

export default Messages;
