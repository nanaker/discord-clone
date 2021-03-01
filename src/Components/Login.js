import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../config/firebase";
import { login, logout } from "../features/userSlice";

const Login = () => {
  const signin = () => {
    //google login
    auth.signInWithPopup(provider).catch((err) => console.log("err", err));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.id,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png"
          alt="discord_logo"
        />
      </div>
      <Button className="login__button" onClick={signin}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
