const express = require("express");
const router = express.Router();

const RegistrationRoutes = router.get("/registrationRoutes", (req, res) => {
  res.send("aita login route");
});

module.exports = RegistrationRoutes;
