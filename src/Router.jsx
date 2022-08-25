import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateSession from "./components/CreateSession";
import Vote from "./components/Vote";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/createsession" element={<CreateSession />} />
      </Routes>
    </div>
  );
};

export default Router;
