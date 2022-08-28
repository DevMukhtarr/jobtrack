import { Router } from "express";
const router = Router();
import { signIn, signUp } from "../controllers/authcontroller.js";

router.route("/signin").post(signIn)
router.route("/signup").post(signUp)

export default router