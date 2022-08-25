import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LogIn() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      className="textfield"
    >
      <Stack spacing={2}>
        <TextField
          className="textfield-child"
          label="Required"
          defaultValue="Email"
          required
        />
        <TextField
          className="textfield-child"
          label="Required"
          defaultValue="Password"
          required
        />
        <Button
          to="/LogIn"
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
