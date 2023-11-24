/* eslint-disable no-console*/
import express from "express";
// import route from "./src/routes/v1";
import cors from "cors";
import { APIs_V1 } from "./src/routes/v1";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel 2");
});

app.use(express.json());
app.use(cors());
// route(app);

//Use APIs v1
app.use("/api/v1", APIs_V1);


app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
export default app;
