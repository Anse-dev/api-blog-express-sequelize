const { Router } = require("express");
const userRouter = require("../user/UserRouter");

//const profilesRoutes = require("./profiles");
const tagRouter = require("../blog/tag/TagRouter");
const articleRouter = require("../blog/article/ArticleRouter");
const Api = Router();
Api.use("/user", userRouter);
Api.use("/tag", tagRouter);
Api.use("/article", articleRouter);

module.exports = Api;
