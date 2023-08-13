import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({ required_error: "El username es Rquerido" }),
  email: z
    .string({ required_error: "Email es requerido" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Password es requerido" })
    .min(5, { message: "Password must be atb least 6 characters" }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: '"Email is required',
    })
    .email({
      message: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Pasword is required",
    })
    .min(5, {
      message: "Password must least 6 characters",
    }),
});
