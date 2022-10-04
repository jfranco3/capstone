import React, { createContext, useState } from "react";

const FoodPairContext = createContext();

// A "provider" is used to denote a component that passes its props
// all the way down the component tree.
function FoodPairProvider({ children }) {
  const [likedRestaurants, setLikedRestaurants] = useState([]);
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");
  const [selector, setSelector] = useState("category");
  const [businessData, setBusinessData] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["categories"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  const value = {
    likedRestaurants,
    setLikedRestaurants,
    user,
    setUser,
    businessData,
    setBusinessData,
    input,
    setInput,
    selector,
    setSelector,
    q,
    setQ,
    searchParam,
    filterParam,
    setFilterParam,
  };

  return (
    <FoodPairContext.Provider value={value}>
      {children}
    </FoodPairContext.Provider>
  );
}

export { FoodPairProvider, FoodPairContext };
