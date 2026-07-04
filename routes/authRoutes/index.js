const express = require("express");
const router = express.Router();
const LoginRoutes = require("./LoginRoutes")
const RegistrationRoutes = require("./registrationRoutes")

 router.use("/auth", LoginRoutes);
 router.use("/auth", RegistrationRoutes);

module.exports = router;
