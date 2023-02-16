import express from "express";
import { getAllEmployees } from "../Models/models";

export const employeeRouter = express.Router();

employeeRouter.get("/", async function (req, res) {
  console.log("This is the get route working ok");
});
