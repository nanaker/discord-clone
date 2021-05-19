import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import Login from "../Components/Login";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const user = useSelector(selectUser);
  const theme = createMuiTheme();
  console.log(`theme`, theme);
  theme.palette.primary = {
    light: "#757ce8",
    main: "#808080",
    dark: "#808080",
    contrastText: "#ffffff",
  };
  theme.palette.secondary = {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#ffffff",
  };
  theme.palette.text.primary = "rgb(128,128,128)";

  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
