import { Router } from 'express';
import { getCurrentUserInfo, updateUserInfo } from '../controllers/users';
import { updateUserInfoValidationSchema } from '../validations/users';

const usersRouter = Router();

usersRouter.get('/users/me', getCurrentUserInfo);
usersRouter.patch('/users/me', updateUserInfoValidationSchema, updateUserInfo);

export default usersRouter;
