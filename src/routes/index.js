const express = require("express");
const userRoute = require("./userRoute");
const postRoute = require("./postRoute");
const routes = express.Router();

routes.use("/auth", userRoute);
routes.use("/posts", postRoute);

module.exports = routes;
