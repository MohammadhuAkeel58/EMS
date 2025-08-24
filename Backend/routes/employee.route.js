import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.post("/create", createEmployee);
router.patch("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

export default router;
