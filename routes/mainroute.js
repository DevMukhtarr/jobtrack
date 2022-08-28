import { Router } from "express";
const router = Router()
import { jobApplied } from "../controllers/maincontroller.js";
import { verifyToken } from "../middlewares/auth.js";

router.route("/job-applied").post(verifyToken, jobApplied)

export default router