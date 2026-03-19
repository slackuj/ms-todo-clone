import { z } from "zod";

const stepsSchema = z.object({
    title: z.string(),
    isCompleted: z.boolean().default(false)
});

export const createTaskSchema = z.object({
    title: z.string(),
    dueDate: z.date().optional(),
    isImportant: z.boolean().default(false),
    isCompleted: z.boolean().default(false),
    note: z.string().optional(),
    steps: z.array(stepsSchema).optional(),
    taskList: z.string().optional(),
});

export const deleteByIdSchema = z.object({
    id: z.string()
});

export const updateTaskSchema = z.object({
    title: z.string().optional(),
    dueDate: z.date().optional(),
    isImportant: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    note: z.string().optional(),
    steps: z.array(stepsSchema).optional(),
    taskList: z.string().optional()
});

export const updateByIdSchema = deleteByIdSchema;
export const fetchByIdSchema = deleteByIdSchema;