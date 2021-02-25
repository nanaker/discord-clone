import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchOutlined,
  SendRounded,
} from "@material-ui/icons";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__left__hash">#</span>test channel name
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />
        <div className="chatHeader__right__search">
          <input placeholder="search" />
          <SearchOutlined />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
};

export default ChatHeader;
