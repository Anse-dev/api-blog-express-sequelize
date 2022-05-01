const { Router } = require("express");
const sequelize = require("../../../database/database");
const { Article } = require("../../models");
const commentRouter = require("../comment/CommentRouter");
const route = Router();
route.use("/comments", commentRouter);
route.post("/", async (req, res) => {
  const post = { ...req.body };
  const t = sequelize.transaction();
  await Article.create(post);
  try {
    await t.commit();
  } catch (error) {
    await t.rollback();
    res.status(501).json({ error, message: "error" });
  }
});
route.get("/:slug", (req, res) => {
  res.send({
    article: {},
  });
});

module.exports = route;
