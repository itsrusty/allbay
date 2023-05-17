import { Router } from "express";
import { getFiles } from "../../controllers/file/getFiles.controller.js";

const router = Router();

router.get("/file/:id", getFiles);

export default router