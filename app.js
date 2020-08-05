require("dotenv").config();
const miscHelper = require('./helper')
const express = require("express");
const port = process.env.SERVER_PORT;
const app = express();
function getUser() {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT `id`, `username`, `image`, `tanggal`, `likes` FROM `users` WHERE 1",
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      }
    );
  });
}
const connection = require("./DB");
app.use(
  "/api/v1",
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    next();
  },
  express.Router().get("/user", function (req, res) {
      console.log('helo')
    getUser()
      .then((result) => {
        miscHelper.response(res, result, 200);
      })
      .catch((err) => console.log(err));
  })
);

app.listen(port, () => {
  console.log(`\n App Listen port ${port}`);
});

module.exports = app;
