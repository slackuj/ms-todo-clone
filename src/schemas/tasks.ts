import { z } from "zod";

const stepsSchema = z.object({
    title: z.string(),
    isCompleted: z.boolean().default(false)
});

export const createTaskSchema = z.object({
    title: z.string(),
    dueDate: z.date(),
    reminder: z.date(),
    isImportant: z.boolean(),
    isCompleted: z.boolean(),
    note: z.string(),
    steps: z.array(stepsSchema),
    taskList: z.string()
});

export const deleteByIdSchema = z.object({
    id: z.string()
});

/*export const updateTaskSchema = z.object({
    title: z.string().optional(),
    dueDate: z.date().optional(),
    reminder: z.date().optional(),
    isImportant: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    note: z.string().optional(),
    steps: z.array(stepsSchema).optional(),
    taskList: z.string().optional()
});*/
export const updateTaskSchema = createTaskSchema.optional();

export const updateByIdSchema = deleteByIdSchema;
export const fetchByIdSchema = deleteByIdSchema;