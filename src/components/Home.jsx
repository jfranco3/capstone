import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Vote from "./Vote";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* <Stack spacing={2}>
        <Button
          component={Link}
          to="/signup"
          className="signin-button"
          variant="contained"
          color="primary"
        >
          SIGN UP
        </Button>
        <strong>OR</strong>
        <Button
          component={Link}
          to="/login"
          className="login-button"
          variant="contained"
          color="primary"
        >
          LOG IN
        </Button>
      </Stack> */}

      {/* create a search bar for filtering results based on user input */}

      <Vote />
    </div>
  );
}
