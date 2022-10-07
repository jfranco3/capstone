import React from "react";
import Footer from "./Footer";
import ChatBubble from "./ChatBubble";

export function Home() {
  return (
    <>
      <div className="home-container">
        {/* <video src="/Background-video-1" autoPlay loop muted /> */}
        <ChatBubble />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
