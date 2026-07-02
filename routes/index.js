const express = require("express");
const router = express.Router();
const baseUrl = process.env.BASE_URL;
const authRoutes = require("./authRoutes/index");

router.use(baseUrl, authRoutes);

module.exports = router;
