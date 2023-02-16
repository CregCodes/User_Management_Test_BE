import express from "express";
import { getAllEmployees } from "../Models/models.js";

const employeeRouter = express.Router();

employeeRouter.get("/", async function (req, res) {
  console.log("This is the get route working ok");
  const allEmployees = await getAllEmployees();
  res.status(200).json({ success: true, payload: allEmployees });
});

export default employeeRouter;
