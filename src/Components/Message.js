import { Avatar } from "@material-ui/core";
import React from "react";

const Message = () => {
  return (
    <div className="message">
      <Avatar src="https://lh3.google.com/u/0/ogw/ADGmqu93VN8nI1nOeozpKwmZHh7ya1SO5QiWDpz8Armd=s32-c-mo" />
      <div className="message__info">
        <h4>
          Nawal{" "}
          <span className="message__info__timestamp">this is a time stamp</span>
        </h4>
        <p>this is the message</p>
      </div>
    </div>
  );
};

export default Message;
