import Router from "express"
import bcrypt from "bcrypt"
import { login } from "../../controllers/auth/login.controller.js";

const router = Router();

router.get("/login", login)

export default router