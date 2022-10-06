import React, { useContext, useState } from "react";
import RestaurantList from "./RestaurantList";
import axios from "axios";
import Footer from "./Footer";
import { functions } from "../firebaseConfig";
import { httpsCallable } from "firebase/functions";
import { FoodPairContext } from "../Context/FoodPairProvider";

function FilterSearch() {
  const { businessData, setBusinessData, input, setInput, coordinates } =
    useContext(FoodPairContext);

  const [searchInput, setSearchInput] = useState("");
  const [radius, setRadius] = useState();

  const getUserYelpSearch = httpsCallable(functions, "getUserYelpSearch");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelect = (event) => {
    setRadius(event.target.value);
  };

  const searchByCategory = async () => {
    try {
      const result = await getUserYelpSearch({
        coordinates,
        searchInput,
        radius,
      });
      const parsedResult = JSON.parse(result.data.result);
      setBusinessData(parsedResult);
    } catch (error) {
      console.error("ERROR GETTING USER RESULTS", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (radius === "{}") {
    searchByCategory();
    // }
  };
  console.log("radius", radius);

  return (
    <div>
      <h1>Filter restaurant choices near you!</h1>

      <form onSubmit={handleSubmit}>
        <label for="category">Search food categories here </label>

        <input
          id="category"
          placeholder="Search..."
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Search</button>

        <label for="search-by">What distance do you want to travel?: </label>
        <select onChange={handleSelect} name="search-by" id="search-by">
          <option value="16000">within 10 miles</option>
          <option value="32000">within 20 miles</option>
          <option value="48000">within 30 miles</option>
        </select>
      </form>
      <RestaurantList />
      <Footer />
    </div>
  );
}

//SEND TO FIRST FN

export default FilterSearch;
