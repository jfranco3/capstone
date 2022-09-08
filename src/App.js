import React, { useEffect, useState, useContext } from "react";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FoodPairContext } from "./Context/FoodPairProvider";

export default function App(props) {
  const { user, setUser } = useContext(FoodPairContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("CURRENT USER", currentUser);
      setUser(currentUser);
    });

    console.log("AUTH.CURRENTUSER", auth.currentUser);

    return unsubscribe;
    // We only want 1 instance of the user connected to
    //  the database this cleans up and disconnects the
    //  observer function when component is unmounted.
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Router user={user} setUser={setUser} />
    </BrowserRouter>
  );
}
