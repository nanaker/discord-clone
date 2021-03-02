import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../config/firebase";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import firebase from "firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  console.log("user", user);
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("messages", messages);
  console.log("channelId", channelId);
  useEffect(() => {
    if (channelId) {
      console.log("useEffect");
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          console.log("snapshot", snapshot);
          return setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            user={message.user}
            message={message.message}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircle fontSize="larger" />
        <form className="chat__input__form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message  #${channelName || ""}`}
          />
          <button
            // disabled={!channelId}
            onClick={sendMessage}
            className="chat__inputButton"
            type="submit"
          >
            Send message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="larger" />
          <Gif fontSize="larger" />
          <EmojiEmotions fontSize="larger" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
