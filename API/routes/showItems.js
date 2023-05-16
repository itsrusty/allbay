import { Router } from "express";
import { showItems } from "../controllers/file/showItems.controller.js";

const router = Router();

router.get("/all", showItems);

export default router;