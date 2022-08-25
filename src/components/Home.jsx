import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      className="textfield"
    >
      <Stack spacing={2}>
        <Button
          component={Link}
          to="/signup"
          className="signin-button"
          variant="contained"
          color="success"
        >
          SIGN UP
        </Button>
        <strong>OR</strong>
        <Button
          component={Link}
          to="/login"
          className="login-button"
          variant="contained"
          color="success"
        >
          LOG IN
        </Button>
      </Stack>
    </div>
  );
}
