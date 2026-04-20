import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\u0600-\u06FF\s'-]+$/, "Invalid name"),

  email: z
    .string()
    .email("Invalid email")
    .max(100, "Email is too long"),

  phone: z
    .string()
    .min(7, "Phone is too short")
    .max(20, "Phone is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),

  message: z
    .string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long"),
});