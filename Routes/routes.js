import express from "express";
import {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
} from "../Models/models.js";

const employeeRouter = express.Router();

employeeRouter.get("/", async function (req, res) {
  console.log("This is the GET route working ok");
  const allEmployees = await getAllEmployees();
  res.status(200).json({ success: true, payload: allEmployees });
});

employeeRouter.post("/", async function (req, res) {
  console.log("this is the POST route working");
  const newEmployeeInfo = req.body;
  const newEmployee = createEmployee(newEmployeeInfo);
  res.status(201).json({ success: true, payload: newEmployee });
});

employeeRouter.delete("/:id", async function (req, res) {
  console.log("Hello, you have reached the DELETE route");
  const id = req.params.id;
  const result = await deleteEmployee(id);
  res.status(200).json({
    sucess: true,
    payload: { message: "Employee deleted!", deletedEmployee: result },
  });
});

export default employeeRouter;
