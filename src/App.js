import React, { useEffect, useState, useContext } from "react";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { BrowserRouter } from "react-router-dom";
import { FoodPairContext } from "./Context/FoodPairProvider";
import { functions } from "./firebaseConfig";
import { httpsCallable } from "firebase/functions";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./App.css";

export default function App() {
  const { user, setUser, setBusinessData, setLikedRestaurants } =
    useContext(FoodPairContext);

  const getYelpInfo = async () => {
    let input = {};
    navigator.geolocation.getCurrentPosition(
      (position) =>
        (input = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        })
    );
    const testYelpAPI = httpsCallable(functions, "testYelpAPI");
    const result = await testYelpAPI(input);
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

  useEffect(() => {
    const getLikedRestaurants = async () => {
      try {
        const likedRestaurantsRef = collection(
          db,
          "LikedRestaurantsCollection"
        );
        const q = query(likedRestaurantsRef, where("userId", "==", user.uid));
        const queryResults = await getDocs(q);
        queryResults.forEach((doc) =>
          setLikedRestaurants(doc.data().likedRestaurantsIds)
        );
      } catch (error) {
        console.error("ERROR GETTING LIKED restaurants", error);
      }
    };
    if (user?.uid != null) {
      getLikedRestaurants();
    }
  }, [user]);

  // console.log("BUSINESS DATA", businessData);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Router user={user} setUser={setUser} />
    </BrowserRouter>
  );
}
