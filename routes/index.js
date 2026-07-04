const express = require("express");
const router = express.Router();
const baseUrl = process.env.BASE_URL;
const authRoutes = require("./authRoutes/index");
const dashboardRoutes = require("./dashbordRoutes");

router.use(baseUrl, authRoutes);
router.use(baseUrl, dashboardRoutes);


module.exports = router;
