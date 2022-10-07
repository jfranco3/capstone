import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";
import LogIn2 from "./components/LogIn2";
import FilterSearch from "./components/FilterSearch";

//props rendered by App.js
const ProtectedRoute = (props) => {
  const { user, component: Component, ...rest } = props;
  const checkAuth = () => !!user;

  return checkAuth() ? <Component {...rest} /> : <Navigate to="/login" />;
};

const Router = (props) => {
  const { user } = props;
  console.log("USER", user);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn2 />} />
        <Route path="/signup" element={<SignUp2 />} />
        {/* <Route
          path="/vote"
          element={<ProtectedRoute user={user} component={Vote} />}
        /> */}
        <Route
          path="/filtersearch"
          element={<ProtectedRoute user={user} component={FilterSearch} />}
        />
      </Routes>
    </div>
  );
};

export default Router;
