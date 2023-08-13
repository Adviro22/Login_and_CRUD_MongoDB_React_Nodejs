import { Router } from "express";
import { authrequire } from "../middlewares/validateToken.js";
import {
  getTask,
  getTasks,
  createtasks,
  updateTasks,
  deleTasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authrequire, getTasks);

router.get("/task/:id", authrequire, getTask);

router.post("/task", authrequire, validateSchema(createTaskSchema),createtasks);

router.put("/task/:id", authrequire, updateTasks);

router.delete("/task/:id", authrequire, deleTasks);

export default router;
