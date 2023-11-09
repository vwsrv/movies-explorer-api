import { Router } from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/auth.js';

const authRouter = Router();
authRouter.post('/signup', createUser);
authRouter.post('/signin', loginUser);
authRouter.post('/signout', logoutUser);
export default authRouter;
