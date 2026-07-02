const express = require("express");
const router = express.Router();
const LoginRoutes = require("./LoginRoutes")
const RegistrationRoutes = require("./registrationRoutes")

const authRoutes = router.get("/auth", LoginRoutes);
// const authRoutes = router.get("/auth", RegistrationRoutes);

module.exports = authRoutes;
