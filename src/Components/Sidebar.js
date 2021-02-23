import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import {
  Call,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever programmer </h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>text channel</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voice__icon" fontSize="large" />
        <div className="sidebar__voice__info">
          <h3>Voice connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voice__icons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://lh3.google.com/u/0/ogw/ADGmqu93VN8nI1nOeozpKwmZHh7ya1SO5QiWDpz8Armd=s32-c-mo" />
        <div className="sidebar__profile__info">
          <h3>@nawal</h3>
          <p>#thisISMYID</p>
        </div>
        <div className="sidebar__profile__icons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
