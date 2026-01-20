import z from "zod";

export const jobSchema = z.object({
  companyName: z.string().min(1, "Company is required"),
  job: z.string().min(1, "Job title is required"),
  url: z.httpUrl("Invalid URL").or(z.literal("")), // Permite URL válida o vacío
  plataform: z.enum([
    "Linkedin",
    "Indeed", 
    "Wellfound",
    "Arc.dev",
    "We Work Remotely",
  ]),
  status: z.enum([
    "Applied",
    "Interview", 
    "Rejected",
    "Offers",
  ]),
  notes: z.string().optional(),
});

// Inferir el tipo automáticamente para usarlo en el form
export type JobFormData = z.infer<typeof jobSchema>;