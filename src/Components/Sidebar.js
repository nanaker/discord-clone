import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import {
  Call,
  ExitToApp,
  Headset,
  InfoOutlined,
  // MeetingRoom,
  Mic,
  // Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../config/firebase";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("channels").onSnapshot((snapShot) => {
      setChannels(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name :");
    if (channelName) {
      db.collection("channels").add({
        channelName,
      });
    }
  };
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
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
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
        <Avatar src={user.photo} />
        <div className="sidebar__profile__info">
          <h3>{user.displayName}</h3>
          <p>{user.uid}</p>
        </div>
        <div className="sidebar__profile__icons">
          <Mic />
          <Headset />
          <ExitToApp
            titleAccess="logout"
            style={{ cursor: "pointer" }}
            onClick={() => auth.signOut()}
          />
          {/*  <Settings /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
