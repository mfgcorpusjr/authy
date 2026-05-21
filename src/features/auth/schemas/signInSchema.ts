import { z } from "zod";

const signInSchema = z.object({
  username: z.string().trim().min(1, { error: "Username is required" }),
  password: z.string().trim().min(1, { error: "Password is required" }),
});

export default signInSchema;
