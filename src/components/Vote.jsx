import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { functions } from "./firebaseConfig";
// import { httpsCallable } from "firebase/functions";

//   const testYelpAPI = async () => {
//     const testYelpAPI = httpsCallable(functions, "testYelpAPI");
//     const result = await testYelpAPI();
//     console.log("FETCHING YELP API", result);
//   };

function Vote() {
  // testYelpAPI();

  return (
    //     <div>

    <RestaurantCard />

    //     </div>
  );
}

//NEEDS:
//SESSION ID AND YELP ID OF EACH RANDOM RESTAURANT

export default Vote;
