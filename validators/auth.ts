import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, { message: "Your username should not be that short!" }).max(255),
  password: z.string().min(6).max(100),
});
