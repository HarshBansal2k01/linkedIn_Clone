import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  //redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* login */}
      {!user ? (
        <Login />
      ) : (
        /* App Body */
        <div className="app__body">
          {/* Sidebar(left) */}
          <Sidebar />
          {/* Feed(centre) */}
          <Feed />
          {/* Widgets(right) */}
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
