import React, { useContext } from "react";
import Vote from "./Vote";
import axios from "axios";
import Footer from "./Footer";
import { FoodPairContext } from "../Context/FoodPairProvider";

function FilterSearch() {
  const {
    businessData,
    setBusinessData,
    input,
    setInput,
    selector,
    setSelector,
  } = useContext(FoodPairContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSelect = (event) => {
    setSelector(event.target.value);
  };

  const searchByCategory = () => {
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?&latitude=30.266666&longitude= -97.733330`
      )
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
        <label for="category">Search food categories here </label>

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
      <Vote />
      <Footer />
    </div>
  );
}

//SEND TO FIRST FN

export default FilterSearch;
