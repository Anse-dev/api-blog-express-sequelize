const http = require("http");
const app = require("./app");
const sequelize = require("../database/database");
const server = http.createServer(app);
const port = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    server.listen(port, () => {
      return console.log(` server is launch on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
