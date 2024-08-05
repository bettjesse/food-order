import express from "express"
import { jwtCheck, jwtParse } from "../middleware/auth"
import MyUserController from "../controllers/MyUserController"
const router = express.Router()

router.post("/", jwtCheck, MyUserController.createCurrentUser)
router.put("/", jwtParse, jwtCheck, MyUserController.updateUser)
export default router