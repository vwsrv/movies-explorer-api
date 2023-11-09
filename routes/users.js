import { Router } from 'express';
import { getCurrentUserInfo, updateUserInfo } from '../controllers/users.js';
import updateUserInfoValidationSchema from '../validations/users.js';

const usersRouter = Router();

usersRouter.get('/users/me', getCurrentUserInfo);
usersRouter.patch('/users/me', updateUserInfoValidationSchema, updateUserInfo);

export default usersRouter;
