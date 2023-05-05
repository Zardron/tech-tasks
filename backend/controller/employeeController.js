const asyncHandler = require("express-async-handler");

// @desc Get all employees
// @route GET /employees
// @access Private
const getAllEmployees = asyncHandler(async (req, res) => {});

// @desc Create employees
// @route POST /employees
// @access Private
const createEmployees = asyncHandler(async (req, res) => {
  const data = req.body;

  res.json(data);
});

// @desc Update employees
// @route PATCH /employees
// @access Private
const updateEmployees = asyncHandler(async (req, res) => {
  res.send("UPDATE EMPLOYEE");
});

// @desc Delete employees
// @route DELETE /employees
// @access Private
const deleteEmployees = asyncHandler(async (req, res) => {
  res.send("DELETE EMPLOYEE");
});

module.exports = {
  getAllEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
};
