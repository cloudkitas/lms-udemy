import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");


require("dotenv").config();

// create express app
const app = express();

//apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("My own Middleware");
  next();
});

readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

//port
const port = process.env.PORT || 8000;

//listen
app.listen(port, () => {
  console.log(`Server is up on port:) ${port}`);
});
