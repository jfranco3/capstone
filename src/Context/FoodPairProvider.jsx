import React, { createContext, useState } from "react";

const FoodPairContext = createContext();

// A "provider" is used to denote a component that passes its props
// all the way down the component tree.
function FoodPairProvider({ children }) {
  //Class 8: For Firebase user authentication from onAuthStateChanged
  const [likedRestaurants, setLikedRestaurants] = useState([]);

  const [user, setUser] = useState("");

  //Class 9: Create a useState hook to store the data we Read from Firestore
  const [businessData, setBusinessData] = useState([]);

  const value = {
    likedRestaurants,
    setLikedRestaurants,
    user,
    setUser,
    businessData,
    setBusinessData,
  };

  return (
    <FoodPairContext.Provider value={value}>
      {children}
    </FoodPairContext.Provider>
  );
}

export { FoodPairProvider, FoodPairContext };
