const mongoose = require("mongoose");
const db_url = process.env.DB_URL;

const dbConnect = function dbConnect() {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log(`Database is not connected, ${error}`);
    });
};

module.exports = dbConnect;
