const Article = require("../blog/article/ArticleModel");
const Category = require("../blog/category/CategoryModel");
const Tag = require("../blog/tag/TagModel");
const Comment = require("../blog/comment/CommentModel");
const User = require("../user/userModel");

Article.belongsTo(User, { as: "author" });
Article.belongsToMany(Tag, {
  through: "article_tags",
});
Article.belongsTo(Category, { as: "category" });
Article.belongsToMany(User, { through: "favourites" });
Article.hasMany(Comment);
Comment.belongsTo(Article);
Comment.belongsTo(User, { as: "author" });
Tag.belongsToMany(Article, { through: "article_tags" });
Tag.belongsToMany(Article, { through: "article_tags" });
User.belongsToMany(Article, { through: "favourites" });
module.exports = {
  User,
  Article,
  Comment,
  Tag,
  Category,
};
