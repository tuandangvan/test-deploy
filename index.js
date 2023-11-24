/* eslint-disable no-console*/
const express = require("express");
  // const route = require('./src/routes/v1');
  // const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel 2");
});

// app.use(express.json());
// app.use(cors());
// route(app)


app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
