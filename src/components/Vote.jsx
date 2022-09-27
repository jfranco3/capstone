import React, { useContext } from "react";
import { FoodPairContext } from "../Context/FoodPairProvider";
import RestaurantCard from "./RestaurantCard";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Vote() {
  const { user, businessData, setLikedRestaurants } =
    useContext(FoodPairContext);
  console.log("BIZ DATA", businessData.businesses);

  const handleAdd = async (idToAdd) => {
    console.log("IDTOADD", idToAdd);

    try {
      const likedRestaurantsDocRef = doc(
        db,
        "LikedRestaurantsCollection",
        user.email
      );
      setLikedRestaurants((prevState) => {
        const newState = [...prevState, idToAdd];
        updateDoc(likedRestaurantsDocRef, {
          likedRestaurantsIds: newState,
        });
        return newState;
      });
    } catch (error) {
      console.error("ERROR ADDING Restaurant", error);
    }
  };

  const handleDelete = async (idToRemove) => {
    console.log("IDTODELETE", idToRemove);
    // setUserLikedCars(userLikedCars.filter((id) => idToRemove !== id));
    try {
      const likedRestaurantsDocRef = doc(
        db,
        "LikedRestaurantsCollection",
        user.email
      );
      setLikedRestaurants((prevState) => {
        const newState = prevState.filter((id) => idToRemove !== id);
        updateDoc(likedRestaurantsDocRef, {
          likedRestaurantsIds: newState,
        });
        return newState;
      });
    } catch (error) {
      console.error("ERROR DELETING Restaurant", error);
    }
  };

  return (
    <div>
      {businessData.businesses.map((business) => (
        <RestaurantCard
          key={business.id}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          name={business.name}
          image={business.image_url}
          phone={business.display_phone}
          price={business.price}
          rating={business.rating}
          review_count={business.review_count}
          bid={business.id}
        />
      ))}
    </div>
  );
}

//NEEDS:
//SESSION ID AND YELP ID OF EACH RANDOM RESTAURANT

export default Vote;
