import React, { useContext } from "react";
import { FoodPairContext } from "../Context/FoodPairProvider";
import RestaurantCard from "./RestaurantCard";

function Vote() {
  const { businessData } = useContext(FoodPairContext);
  console.log("BIZ DATA", businessData.businesses);

  return (
    <div>
      {businessData.businesses.map((businesses) => (
        <RestaurantCard
          name={businesses.name}
          image={businesses.image_url}
          phone={businesses.display_phone}
          price={businesses.price}
          rating={businesses.rating}
          review_count={businesses.review_count}
          bid={businesses.id}
        />
      ))}
    </div>
  );
}

//NEEDS:
//SESSION ID AND YELP ID OF EACH RANDOM RESTAURANT

export default Vote;
