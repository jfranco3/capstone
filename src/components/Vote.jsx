import React, { useContext } from "react";
import { FoodPairContext } from "../Context/FoodPairProvider";
import RestaurantCard from "./RestaurantCard";

function Vote() {
  const { businessData } = useContext(FoodPairContext);
  console.log("BIZ DATA", businessData);

  return (
    //     <div>
    //map through api to return pertinent info about each restaurant
    <RestaurantCard />

    //     </div>
  );
}

//NEEDS:
//SESSION ID AND YELP ID OF EACH RANDOM RESTAURANT

export default Vote;
