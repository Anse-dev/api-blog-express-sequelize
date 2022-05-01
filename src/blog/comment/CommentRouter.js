const { Router } = require("express");

const route = Router();
route.get("/", (req, res) => {
  res.send({
    comments: [],
  });
});

module.exports = route;
