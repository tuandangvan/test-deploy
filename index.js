/* eslint-disable no-console*/
import express from "express";
import { APIs_V1 } from "./src/routes/v1/index";
import cors from "cors";

const START_SERVER = () => {
  const app = express();

  // // Enable req.body json data
  // app.use(express.json());
  // app.use(cors());

  // //Use APIs v1
  // app.use("/api/v1", APIs_V1);

  app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });


  const server = app.listen(5000, () => {
  });
};

START_SERVER();