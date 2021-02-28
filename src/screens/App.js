import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <h2>You need to login</h2>
      )}
    </div>
  );
}

export default App;
