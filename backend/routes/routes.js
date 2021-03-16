const express = require("express");
const router = express.Router();
const {
  getEmployeesDetails,
  postData,
  deleteData,
  updateData,
} = require("../controllers/userController");
const validator = require("../controllers/validator");

router.get("/employeesDetails", getEmployeesDetails);
router.post("/employees", validator.dataValidator, postData);
router.delete("/:id", deleteData);
router.put("/:id", updateData);

module.exports = router;
