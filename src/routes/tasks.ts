import { Router } from "express";
import * as tasksController from "../controllers/tasks";
import {validateParams, validateRequestBody} from "../middlewares/validator";
import {
    createTaskSchema,
    deleteByIdSchema,
    fetchByIdSchema,
    updateByIdSchema,
    updateTaskSchema
} from "../schemas/tasks";

const router = Router();
router.post("/", validateRequestBody(createTaskSchema), tasksController.create);
router.get("/", tasksController.fetchAll);
router.delete("/:id", validateParams(deleteByIdSchema), tasksController.deleteById);
router.patch("/:id", validateParams(updateByIdSchema), validateRequestBody(updateTaskSchema), tasksController.updateById);
router.get("/:id", validateParams(fetchByIdSchema), tasksController.fetchById);

export default router;