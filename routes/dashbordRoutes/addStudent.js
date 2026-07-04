const express = require("express");
const router = express.Router();

const addStudentRoutes = router.get("/add", (req, res) => {
  res.send("add the student");
});

module.exports = addStudentRoutes;
