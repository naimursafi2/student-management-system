const express = require("express");
const router = express.Router();

const LoginRoutes = router.get("/login", (req, res) => {
  res.send("aita login route");
});

module.exports = LoginRoutes;
