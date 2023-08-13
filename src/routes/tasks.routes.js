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

router.get("/tasks/:id", authrequire, getTask);

router.post("/tasks", authrequire, validateSchema(createTaskSchema),createtasks);

router.put("/tasks/:id", authrequire, updateTasks);

router.delete("/tasks/:id", authrequire, deleTasks);

export default router;
