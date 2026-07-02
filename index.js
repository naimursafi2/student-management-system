const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const dns = require("dns");
// const route = express.Router();
const router = require("./routes/index")
const PORT = process.env.PORT;
const dbConnect = require("./config/dbConnect");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
app.use(express.json());
app.use(router)
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
