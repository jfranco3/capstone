import React from "react";
import Footer from "./Footer";
import ChatBubble from "./ChatBubble";

export function Home() {
  return (
    <>
      <div className="home-container">
        <ChatBubble />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
