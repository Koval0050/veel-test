import { z } from "zod";

export const loginValidationSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormData = z.infer<typeof loginValidationSchema>;
