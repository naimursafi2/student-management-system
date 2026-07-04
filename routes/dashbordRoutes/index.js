const express = require("express");
const addStudentRoutes = require("./addStudent");
const deleteStudentRoutes = require("./deleteStudent");
const router = express.Router();


 router.use("/dashboard", addStudentRoutes);
 router.use("/dashboard", deleteStudentRoutes);


module.exports = router;
