const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const Api = require("./api");
const errorHandler = require("./error/errorHandler");
dotenv.config({
  path: path.join(__dirname, "..", "config", ".env"),
});
const env_mode = process.env.ENV_NODE;

app.use(cors());
app.use(express.json());

//api routes
app.use("/api", Api);
app.use(errorHandler);
module.exports = app;
