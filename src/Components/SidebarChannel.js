import { Tooltip } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import SaveIcon from "@material-ui/icons/Save";
import Input from "@material-ui/core/Input";
import db from "../config/firebase";

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(channelName);
  const editChannelName = async (e) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    console.log(`save object`);
    const channelRef = db.collection("channels").doc(id);
    await channelRef.set({
      channelName: value,
    });
    try {
      await db.runTransaction(async (t) => {
        const doc = await t.get(channelRef);
        const newPopulation = doc.data().population + 1;
        t.update(channelRef, { population: newPopulation });
      });

      console.log("Transaction success!");
    } catch (e) {
      console.log("Transaction failure:", e);
    }
  };
  return edit ? (
    <div className="sidebarChannel">
      <Input
        value={value}
        onChange={(val) => setValue(val.currentTarget.value)}
      />
      :
      <Tooltip title="Save">
        <SaveIcon onClick={(e) => editChannelName(e)} />
      </Tooltip>
    </div>
  ) : (
    <div
      onClick={() => dispatch(setChannelInfo({ channelId: id, channelName }))}
      className="sidebarChannel"
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
      <Tooltip title="Edit">
        <EditOutlined
          onClick={(e) => {
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            console.log(`edit object`);
            setEdit(true);
          }}
        />
      </Tooltip>
    </div>
  );
};

export default SidebarChannel;
