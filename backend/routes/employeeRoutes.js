const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");

router
  .route("/")
  .get(employeeController.getAllEmployees)
  .post(employeeController.createEmployees)
  .patch(employeeController.updateEmployees)
  .delete(employeeController.deleteEmployees);

module.exports = router;
