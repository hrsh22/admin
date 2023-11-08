"use client"
import React, { useState } from "react";
import { Grid, TextField, Button, Typography, FormLabel } from "@mui/material";
import axios from "axios";

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

const GenerateErupi = () => {
  const [uniqueTransactionId, setUniqueTransactionId] = useState("");
  const [mcc, setMcc] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      !uniqueTransactionId ||
      !mcc ||
      !issuedDate ||
      !transactionAmount ||
      !expiryDate ||
      !status
    ) {
      alert("Please fill all the fields!");
      return;
    }

    // Prepare the form data to send to the backend
    const formData = {
      uniqueTransactionId,
      mcc,
      issuedDate,
      transactionAmount,
      expiryDate,
      status,
    };

    // Send the form data to the backend using Axios
    axios
      .post("http://localhost:5000/merchant/generateErupi", formData)
      .then((response) => {
        // Handle the response from the backend
        console.log("Data sent successfully!", response);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error sending data:", error);
        alert("Form submission failed. Please try again.");
      });
  };

  return (
    <Grid container xs={12} sx={containerStyles}>
      <Grid item xs={6} sx={formContainerStyles}>
        <Typography
          variant="h4"
          sx={{ color: "#000", fontWeight: "bold", textAlign: "center", m: 2 }}
        >
          Transaction Details
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            name="uniqueTransactionId"
            value={uniqueTransactionId}
            fullWidth
            label="Unique Transaction ID"
            placeholder="Enter unique transaction ID"
            onChange={(e) => setUniqueTransactionId(e.target.value)}
            required
            sx={textFieldStyles}
          />
          <TextField
            name="mcc"
            value={mcc}
            fullWidth
            label="MCC (Merchant Category Code)"
            placeholder="Enter MCC"
            onChange={(e) => setMcc(e.target.value)}
            required
            sx={textFieldStyles}
          />
          <FormLabel sx={textFieldStyles}>Issued Date</FormLabel>
          <TextField
            name="issuedDate"
            value={issuedDate}
            fullWidth
            type="date"
            onChange={(e) => setIssuedDate(e.target.value)}
            required
            sx={textFieldStyles}
          />

          <TextField
            name="transactionAmount"
            value={transactionAmount}
            fullWidth
            label="Transaction Amount"
            placeholder="Enter transaction amount"
            onChange={(e) => setTransactionAmount(e.target.value)}
            required
            sx={textFieldStyles}
          />
          <FormLabel sx={textFieldStyles}>Expiry Date</FormLabel>
          <TextField
            name="expiryDate"
            value={expiryDate}
            fullWidth
            type="date"
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            sx={textFieldStyles}
          />
          <TextField
            name="status"
            value={status}
            fullWidth
            label="Status"
            placeholder="Enter status"
            onChange={(e) => setStatus(e.target.value)}
            required
            sx={textFieldStyles}
          />

          <Button
            style={buttonStyles}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default GenerateErupi;
