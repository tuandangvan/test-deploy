/* eslint-disable no-console*/
import express from "express";
// import route from "./src/routes/v1";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel 2");
});

app.use(express.json());
app.use(cors());
// route(app);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
export default app;
