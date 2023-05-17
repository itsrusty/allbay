import { Router } from "express";
import { registerUser } from "../../controllers/auth/register.js";

const router = new Router();

router.post("/register", registerUser)

export default router