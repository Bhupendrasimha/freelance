const Employees = require("../models/user");
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

const getEmployeesDetails = (req, res) => {
  //console.log(req.query.q);

  Employees.find()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => res.status(500).json("Error" + err));
};

const deleteData = (req, res) => {
  console.log(req.params.id);
  Employees.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employees deleted sucessfull"))
    .catch((err) => res.status(400).json("ERROR" + err));
};

const updateData = (req, res) => {
  console.log(req.url);
  console.log(req.params.id);
  Employees.findById(req.params.id)
    .then((Employees) => {
      Employees.name = req.body.name;
      Employees.role = req.body.role;
      Employees.location = req.body.location;
      Employees.active = req.body.active;

      Employees.save()
        .then(() => res.json("Employees updated sucess"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Errors" + err));
};

const postData = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  let id = uuidv4();
  const { name, role, location, active } = req.body;
  const newEmployees = new Employees({
    id,
    name,
    role,
    location,
    active,
  });

  newEmployees
    .save()
    .then(() => res.json("Employees added"))
    .catch((err) => res.status(400).json("Error" + err));
};
module.exports = { getEmployeesDetails, deleteData, postData, updateData };
