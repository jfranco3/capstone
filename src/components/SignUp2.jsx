import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SelectUserRole from "./SelectUserRole";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createRole } from "../Utils/utilityFunctions";
import { setDoc, doc } from "firebase/firestore";
import Footer from "./Footer";

const theme = createTheme();

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userRole, setUserRole] = useState(null);

  const createLikedRestaurantsCollection = async (user) => {
    await setDoc(doc(db, "LikedRestaurantsCollection", user.user.email), {
      userId: user.user.uid,
      likedRestaurantsIds: [],
    });
  };

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
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
      createLikedRestaurantsCollection(userCredential);
      console.log("userCredential.user:from SignUP.js", userCredential.user);
      navigate("/filtersearch");
    } catch (error) {
      console.error("ERROR LOGGING IN", error);
      alert("Invalid Email or Password. Please Try Again!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          borderRadius: "30px",
          borderColor: "white",
          borderStyle: "groove",
          color: "white",
          fontSize: "50px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "rgba(144,7,46, .8)" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ color: "black" }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={signUp} sx={{ mt: 3 }}>
            {/* <SelectUserRole setUserRole={setUserRole} /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                  value={registerEmail}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                  value={registerPassword}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "rgba(144,7,46, .8)" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <button
                  style={{
                    backgroundColor: "rgb(4, 103, 120)",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                  onClick={navigateLogin}
                >
                  Already have an account? Log In
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
