import * as React from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";

function ChatBubble() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="chatBubbles">
      <div
        style={{
          backgroundColor: "rgb(230,229,233)",
          width: "40%",
          borderRadius: "70px",
          color: "black",
          padding: "5px",
          marginBottom: "10px",
          marginLeft: "20%",
          marginTop: "5%",
        }}
      >
        <h1>Where do you want to eat??</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgb(13,133,254)",
          width: "50%",
          borderRadius: "50px",
          color: "white",
          padding: "5px",
          marginLeft: "30%",
          marginTop: "1%",
        }}
      >
        <h1>
          {" "}
          I dont know, Where do YOU want to eat??!
          <span role="img" aria-label="sheep">
            🐑
          </span>
        </h1>
      </div>

      <div
        style={{
          backgroundColor: "rgb(230,229,233)",
          width: "35%",
          borderRadius: "70px",
          color: "black",
          padding: "5px",
          marginBottom: "10px",
          marginLeft: "20%",
          marginTop: "1%",
        }}
      >
        <h1>OMG...Let's try Foodie App!!</h1>
      </div>
      <div
        style={{
          backgroundColor: "rgb(13,133,254)",
          width: "42%",
          borderRadius: "50px",
          color: "white",
          padding: "5px",
          marginLeft: "38%",
        }}
      >
        <h1>
          {" "}
          Oh yea! It can help us decide!
          <span role="img" aria-label="sheep">
            🐑🐑
          </span>
        </h1>
      </div>

      <div
        style={{
          backgroundColor: "rgb(144,7,46, .8)",
          borderRadius: "30px",
          borderColor: "white",
          borderStyle: "groove",
          color: "white",
          fontSize: "60px",
          marginTop: "5px",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "10%",
        }}
      >
        <p style={{ color: "white" }}>
          <strong>Start Searching Now!</strong>
        </p>

        <Button
          style={{ backgroundColor: "rgb(4,103,120)" }}
          onClick={navigateLogin}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
    // </div>
  );
}

export default ChatBubble;
