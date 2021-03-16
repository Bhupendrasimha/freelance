const { body, check } = require("express-validator");

exports.dataValidator = check("name")
  .trim()
  .isLength({ min: 4 })
  .withMessage("name must be minimum 4 characters long")
  .isAlphanumeric()
  .withMessage("name must be alphanumeric");
