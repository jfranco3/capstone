import React from "react";
// import Stack from "@mui/material/Stack";
import { Button } from "./Button";
import Footer from "./Footer";

export function Home() {
  return (
    <>
      <div className="home-container">
        <video src="/Background-video-1" autoPlay loop muted />
        <h1>
          "Where do you want to eat, I dont know, Where do YOU want to eat?
        </h1>
        <p>
          We all have asked this before. Let our app help decide! Click Here!
        </p>

        <div className="home-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
