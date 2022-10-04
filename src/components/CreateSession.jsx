import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { FoodPairContext } from "../Context/FoodPairProvider";

function CreateSession() {
  const {
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
  } = useContext(FoodPairContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSelect = (event) => {
    setSelector(event.target.value);
  };

  const searchByCategory = () => {
    axios
      .get(`https://api.yelp.com/v3/businesses/search?query=${input}`)
      .then(() => {
        setBusinessData(businessData.businesses);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selector === "category") {
      searchByCategory();
    }
  };

  return (
    <div>
      <h1>START A NEW SESSION</h1>

      <form onSubmit={handleSubmit}>
        <label for="category">What food category are you searching for? </label>

        <input
          id="category"
          placeholder="Search..."
          type="text"
          onChange={handleChange}
          value={input}
        />

        <label for="search-by">What distance do you want to travel?: </label>
        <select onChange={handleSelect} name="search-by" id="search-by">
          <option value="10">within 10 miles</option>
          <option value="20">within 20 miles</option>
          <option value="30">within 30 miles</option>
        </select>
      </form>
    </div>
  );
}

//SEND TO FIRST FN

export default CreateSession;
