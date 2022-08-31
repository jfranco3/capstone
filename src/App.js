import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState("");

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
    <div>
      <NavBar user={user} />
      <Router user={user} setUser={setUser} />
    </div>
  );
}
