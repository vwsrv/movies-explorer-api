import { Router } from "express";
import { getCurrentUserInfo, updateUserInfo } from "../controllers/users";

const userRouter = Router();

userRouter.get('/me', getCurrentUserInfo);
userRouter.patch('/me', updateUserInfo);

export default userRouter;