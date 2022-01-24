import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { readdirSync } from "fs";
import e from "cors";
const morgan = require("morgan");

require("dotenv").config();

// create express app
const app = express();

//DB CONNECT
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB ERROR => ", err);
  });

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
