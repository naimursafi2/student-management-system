const express = require("express");
const Registration = require("../../controllers/authControllers/Registration");
const router = express.Router();

const RegistrationRoutes = router.post("/registration", Registration);

module.exports = RegistrationRoutes;
