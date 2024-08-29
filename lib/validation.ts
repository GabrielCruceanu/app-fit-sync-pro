import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+[1-9]\d{1,14}$/.test(phone), "Invalid phone number"),
});
