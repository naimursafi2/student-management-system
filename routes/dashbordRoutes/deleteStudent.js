const express = require("express");
const router = express.Router();

const deleteStudentRoutes = router.get("/delete", (req, res) => {
  res.send("delete the student");
});

module.exports = deleteStudentRoutes;
