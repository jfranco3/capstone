import React, { useContext, useState } from "react";
import RestaurantList from "./RestaurantList";
import Footer from "./Footer";
import { functions } from "../firebaseConfig";
import { httpsCallable } from "firebase/functions";
import { FoodPairContext } from "../Context/FoodPairProvider";

function FilterSearch() {
  const { setBusinessData, coordinates } = useContext(FoodPairContext);

  const [searchInput, setSearchInput] = useState("");
  const [radius, setRadius] = useState(8000);
  const [price, setPrice] = useState(1);

  const getUserYelpSearch = httpsCallable(functions, "getUserYelpSearch");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelect = (event) => {
    setRadius(event.target.value);
  };

  const handleSelectPrice = (event) => {
    setPrice(event.target.value);
  };

  const searchByCategory = async () => {
    try {
      const result = await getUserYelpSearch({
        coordinates,
        searchInput,
        radius,
        price,
      });
      const parsedResult = JSON.parse(result.data.result);
      setBusinessData(parsedResult);
    } catch (error) {
      console.error("ERROR GETTING USER RESULTS", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchByCategory();
  };
  console.log("radius", radius);
  console.log("price", price);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(144,7,46, .8)",
          borderRadius: "30px",
          borderColor: "white",
          borderStyle: "groove",
          color: "white",
          fontSize: "20px",
          marginTop: "10px",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <h1>Easily filter restaurant choices near you!</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgba(144,7,46, .8)",
          borderRadius: "30px",
          borderColor: "white",
          borderStyle: "groove",
          color: "white",
          fontSize: "30px",
          marginTop: "20px",
          marginLeft: "15%",
          marginRight: "5%",
          width: "70%",
          padding: "5px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label for="category">
            Search a food category of your choice here:{" "}
          </label>

          <input
            id="category"
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={searchInput}
          />

          <p>
            <label for="search-by-radius">
              How far do you want to travel?{" "}
            </label>
          </p>

          <p>
            <select
              onChange={handleSelect}
              name="search-by-radius"
              id="search-by-radius"
            >
              <option value="8000">within 5 miles</option>
              <option value="16000">within 10 miles</option>
              <option value="32000">within 20 miles</option>
              {/* <option value="35000">More than 20 miles</option> */}
            </select>
          </p>

          <p>
            <label for="search-by-price">What's your price range today? </label>
            <select
              onChange={handleSelectPrice}
              name="search-by-price"
              id="search-by-price"
            >
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </p>

          <button
            style={{
              backgroundColor: "rgb(4,103,120)",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Search Now
          </button>
        </form>
      </div>
      <RestaurantList />
      <Footer />
    </>
  );
}

export default FilterSearch;
