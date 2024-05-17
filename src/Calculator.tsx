import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

const getButtonColors = (value: string) => {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    return { backgroundColor: "#4FC3F7", color: "#FFFFFF" }; // Light blue background, white text for '+'
  } else if (value === "=") {
    return { backgroundColor: "#66BB6A", color: "#FFFFFF" }; // Green background, white text for '='
  } else if (value === "c") {
    return { backgroundColor: "#FF7043", color: "#FFFFFF" };
  } else {
    return { backgroundColor: "#E0E0E0", color: "#333333" }; // Light grey background, dark grey text for numbers
  }
};

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: "0 auto",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TextField
        variant="outlined"
        value={input}
        inputProps={{
          readOnly: true,
          style: {
            textAlign: "right",
          },
        }}
        sx={{ mb: 2}}
        fullWidth
      />

      <Grid
        container
        spacing={1}
        sx={{ justifyContent: "center", color: "black" }}
      >
        {["7", "8", "9", "/"].map((value) => (
          <Grid item xs={3} key={value}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleButtonClick(value)}
              sx={{
                padding: "10px 0px",
              }}
              style={getButtonColors(value)}
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <Grid item xs={3} key={value}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleButtonClick(value)}
              sx={{
                padding: "10px 0px",
              }}
              style={getButtonColors(value)}
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <Grid item xs={3} key={value}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleButtonClick(value)}
              sx={{
                padding: "10px 0px",
              }}
              style={getButtonColors(value)}
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <Grid item xs={3} key={value}>
            <Button
              fullWidth
              variant="contained"
              onClick={
                value === "=" ? handleCalculate : () => handleButtonClick(value)
              }
              sx={{
                padding: "10px 0px",
              }}
              style={getButtonColors(value)}
            >
              {value}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            fullWidth
            sx={{
              padding: "10px 0px",
            }}
            variant="contained"
            onClick={handleClear}
            style={getButtonColors("c")}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;