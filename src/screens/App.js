import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import Login from "../Components/Login";

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
        <Login />
      )}
    </div>
  );
}

export default App;
