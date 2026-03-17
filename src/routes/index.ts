import { Router } from "express";
import tasksRoutes from "./tasks";

const router = Router();

router.use("/tasks", tasksRoutes);

export default router;