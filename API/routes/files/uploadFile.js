import { Router } from "express";
import { upload } from "../../controllers/file/uploadFile.controller.js";
import { uploadFiles } from "../../middleware/multer.config.js"

const router = Router();

router.post("/file", uploadFiles(), upload)

export default router