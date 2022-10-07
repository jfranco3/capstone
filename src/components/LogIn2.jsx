import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FoodPairContext } from "../Context/FoodPairProvider";
import loginBackground2 from ".//img/loginBackground2.jpg";

const theme = createTheme();

export default function LogIn() {
  const { setUser } = useContext(FoodPairContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate("/signup");
  };

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/filtersearch");
      })
      .catch((error) => {
        console.error("ERROR LOGGING IN", error);
        alert("Invalid Email or Password. Please Try Again!");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(` + loginBackground2 + `)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgba(144,7,46, .8)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h">
              Log In
            </Typography>
            <Box component="form" noValidate onSubmit={login} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                value={loginEmail}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                value={loginPassword}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                // variant="contained"
                sx={{
                  mt: 3,
                  mb: 5,
                  bgcolor: "rgba(144,7,46, .8)",
                  color: "white",
                }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2"> */}
                  Forgot password?
                </Grid>
                <Grid item>
                  <button onClick={navigateSignup}>
                    Don't have an account? Sign Up
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}
