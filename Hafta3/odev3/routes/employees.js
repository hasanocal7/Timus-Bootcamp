import express from "express";
const router = express.Router();
import { nanoid } from "nanoid";
import { writeFile, readFile } from "../helpers/dbConnection.js";

const idLength = 8;

/**
 * @swagger
 * components:
 *  schemas:
 *    Employee:
 *      type: Object
 *      required:
 *        - name
 *        - email
 *        - gender
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the employee
 *        name:
 *          type: string
 *          description: The employee name
 *        email:
 *          type: string
 *          description: The employee email
 *        gender:
 *          type: string
 *          description: The employee gender
 *      example:
 *        id: aF0KmL
 *        name: Hasan Öcal
 *        email: hasanocaltest@gmail.com
 *        gender: Male
 */

/**
 * @swagger
 * tags:
 *  - name: Employees
 *    description: The employees managing API
 */

/**
 * @swagger
 * /employees:
 *  get:
 *    summary:  Returns a list of the all Employees
 *    tags: [Employees]
 *    responses:
 *      200:
 *        description:  The list of the employees
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Employee'
 */

//* getAllEmployees

router.get("/", async (req, res) => {
  try {
    const employees = req.app.db.employees;
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /employees/{id}:
 *  get:
 *    summary: Get the employee by id
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The employee id
 *    responses:
 *      200:
 *        description: The employee description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 */

//* getEmployee

router.get("/:id", async (req, res) => {
  try {
    const employees = req.app.db.employees;

    const id = req.params.id;

    if (id) {
      const filteredEmployee = employees.find((employee) => employee.id == id);
      if (filteredEmployee) {
        res.status(200).json(filteredEmployee);
      } else {
        res.status(404).send("Employee with the specified ID was not found");
      }
    } else {
      res.status(404).send("Employee ID was not specified");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /employees:
 *  post:
 *    summary: Create a new employee
 *    tags: [Employees]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      201:
 *        description: The employee was successfuly created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      500:
 *        description: Some server error
 */

//* createEmployee

router.post("/", async (req, res) => {
  try {
    const employees = req.app.db.employees;
    const employee = {
      id: nanoid(idLength),
      ...req.body,
    };
    const existingData = await readFile();
    employees.push(employee);
    const updatedData = {
      ...existingData,
      employees: employees,
    };
    await writeFile(updatedData);

    res.status(201).send(employees);
  } catch (error) {
    console.error(error);
    throw error;
  }
});

/**
 * @swagger
 * /employees/{id}:
 *  put:
 *    summary: Update the employee by the id
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The employee id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The employee was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 *      500:
 *        description: Some error happened
 */

//* updateEmployee

router.put("/:id", async (req, res) => {
  try {
    const employees = req.app.db.employees;
    const id = req.params.id;
    if (id) {
      const employeeIndex = employees.findIndex(
        (employee) => employee.id == id
      );
      if (employeeIndex !== -1) {
        const updatedEmployee = {
          id: req.params.id,
          ...req.body,
        };
        employees[employeeIndex] = updatedEmployee;
        const existingData = await readFile();
        const updatedData = {
          ...existingData,
          employees: employees,
        };
        await writeFile(updatedData);
        res.status(200).json(updatedEmployee);
      } else {
        res.status(404).send("Employee with the specified ID was not found");
      }
    } else {
      res.status(400).send("Employee ID was not specified");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Remove the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *
 *     responses:
 *       200:
 *         description: The employee was deleted
 *       404:
 *         description: The employee was not found
 */

//* deleteEmployee

router.delete("/:id", async (req, res) => {
  try {
    const employees = req.app.db.employees;
    const id = req.params.id;
    if (id) {
      const employeeIndex = employees.findIndex(
        (employee) => employee.id == id
      );
      if (employeeIndex !== -1) {
        employees.splice(employeeIndex, 1);
        const existingData = await readFile();
        const updatedData = {
          ...existingData,
          employees: employees,
        };
        await writeFile(updatedData);
        res.status(200).json(updatedData);
      } else {
        res.status(404).send("Employee with the specified ID was not found");
      }
    } else {
      res.status(400).send("Employee ID was not specified");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
