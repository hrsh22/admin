import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

const containerStyles = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
};

const textFieldStyles = {
  margin: 1,
};

const buttonStyles = {
  height: 50,
  backgroundColor: "#212529",
  margin: "8px",
};

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all the fields!");
      return;
    }

    if (username === "admin" && password === "admin") {
      window.location.href = "/generate";
    }
  };

  return (
    <Grid container xs={12} sx={containerStyles}>
      <Grid item xs={6} sx={formContainerStyles}>
        <Typography
          variant="h4"
          sx={{ color: "#000", fontWeight: "bold", textAlign: "center", m: 2 }}
        >
          Admin Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            name="username"
            value={username}
            fullWidth
            label="Enter your email"
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
            sx={textFieldStyles}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            fullWidth
            label="Enter your password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            sx={textFieldStyles}
          />

          <Button
            style={buttonStyles}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Auth;
