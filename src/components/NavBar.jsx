import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="relative">
      <Toolbar sx={{ bgcolor: "#2E3B55" }}>
        <IconButton color="inherit"></IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FOOD-PAIR
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/createsession">Create Session</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/vote">Vote</Link>
          </li>
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
