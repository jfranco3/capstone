import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="relative">
      <Toolbar sx={{ bgcolor: "black" }}>
        <FastfoodIcon />
        <IconButton color="inherit"></IconButton>

        <Typography variant="h6" style={{ flexGrow: "1", textAlign: "left" }}>
          FOODIE APP
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/filtersearch">Filter Search</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="/vote">Vote</Link> */}

          <li className="nav-list-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          {/* </li> */}
          {auth.currentUser ? (
            <li
              className="nav-list-item"
              onClick={async () => {
                await signOut(auth);
              }}
            >
              Logout
            </li>
          ) : (
            <li
              className="nav-list-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
}
