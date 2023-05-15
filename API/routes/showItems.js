import { Router } from "express";
import { upload } from "../controllers/file/uploadFile.controller.js";

const router = Router();

router.get("/file", upload)

export default router