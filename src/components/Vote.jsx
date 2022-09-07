import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { functions } from "./firebaseConfig";
// import { httpsCallable } from "firebase/functions";

export default function Vote() {
  //   const testYelpAPI = async () => {
  //     const testYelpAPI = httpsCallable(functions, "testYelpAPI");
  //     const result = await testYelpAPI();
  //     console.log("FETCHING YELP API", result);
  //   };
  return (
    //     <div>
    <RestaurantCard />
    //       try {testYelpAPI()}catch(error)
    //       {console.error("ERROR FETCHING API DATA", error)}
    //     </div>
  );
}

//NEEDS:
//SESSION ID AND YELP ID OF EACH RANDOM RESTAURANT
