/* eslint-disable no-console*/
const express = require("express");
const { APIs_V1 } = require("./src/routes/v1/index.js");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel 2");
});

app.use(express.json());
app.use(cors());

//Use APIs v1
app.use("/api/v1", APIs_V1);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
