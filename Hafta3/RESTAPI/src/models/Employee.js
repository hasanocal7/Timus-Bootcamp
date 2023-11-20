const generate = require("../utils/generate");
const Joi = require("joi");

const Employee = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  stillEmployee: Joi.boolean().required(),
});

module.exports = Employee;
