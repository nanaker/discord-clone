import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircle fontSize="larger" />
        <form className="chat__input__form">
          <input placeholder="messages text channel" />
          <button className="chat__inputButton" type="submit">
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
