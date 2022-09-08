import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FoodPairProvider } from "./Context/FoodPairProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FoodPairProvider>
    <App />
  </FoodPairProvider>
);
