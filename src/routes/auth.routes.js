import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken
} from "../controllers/auth.controller.js";
import { authrequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/verify", verifyToken);

router.get("/profile", authrequire, profile);

export default router;
