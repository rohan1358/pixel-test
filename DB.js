require("dotenv").config();

const mysql = require("mysql");
const coneksi = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

coneksi.connect((err) => {
  if (err) console.log(`error : ${err}`);
});
module.exports = coneksi;
