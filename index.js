/* eslint-disable no-console*/
import express from "express";
import { APIs_V1 } from "./src/routes/v1/index";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;