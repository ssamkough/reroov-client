import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "../styles/Chat.css";
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import TextContainer from "./TextContainer";

let socket: any;

const Chat = ({ location }: { location: any }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([] as any);

  const ENDPOINT = "localhost:8000";

  useEffect(() => {
    const states: any = queryString.parse(location.search);
    const name: string = states.name;
    const room: string = states.room;

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event: any) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
