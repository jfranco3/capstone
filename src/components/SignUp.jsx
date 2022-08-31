import React, { useState } from "react";
import SelectUserRole from "./SelectUserRole";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createRole } from "../Utils/utilityFunctions";
import { setDoc, doc } from "firebase/firestore";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userRole, setUserRole] = useState(null);

  const createLikedCarsCollection = async (user) => {
    await setDoc(doc(db, "userLikedRestaurants", user.user.email), {
      userId: user.user.uid,
      likedRestaurantIds: [],
    });
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      createRole(userCredential, userRole);
      createLikedCarsCollection(userCredential);
      console.log("userCredential.user:from SignUP.js", userCredential.user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="signUp-form" onSubmit={signUp}>
          <SelectUserRole setUserRole={setUserRole} />
          <TextField
            required
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            value={registerEmail}
            name="Email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            value={registerPassword}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            className="signUp-button"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default SignUp;
