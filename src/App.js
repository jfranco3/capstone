import React, { useEffect, useState, useContext } from "react";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FoodPairContext } from "./Context/FoodPairProvider";
import { functions } from "./firebaseConfig";
import { httpsCallable } from "firebase/functions";

export default function App(props) {
  const { user, setUser, setBusinessData } = useContext(FoodPairContext);

  const getYelpInfo = async () => {
    const testYelpAPI = httpsCallable(functions, "testYelpAPI");
    const result = await testYelpAPI();
    // console.log("FETCHING YELP API", result.data.result);
    const parsedResult = JSON.parse(result.data.result);
    // console.log("PARSED RESULT", parsedResult);
    setBusinessData(parsedResult);
  };

  useEffect(() => {
    getYelpInfo();
  }, []);

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

  // console.log("BUSINESS DATA", businessData);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Router user={user} setUser={setUser} />
    </BrowserRouter>
  );
}
