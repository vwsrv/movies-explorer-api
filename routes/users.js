import { Router } from "express";
import { getCurrentUserInfo, updateUserInfo } from "../controllers/users";

const usersRouter = Router();

usersRouter.get('/me', getCurrentUserInfo);
usersRouter.patch('users/me', updateUserInfo);

export default usersRouter;