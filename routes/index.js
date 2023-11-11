import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import moviesRouter from './movies';
import NotFoundError from '../errors/NotFoundError';
import Auth from '../middleware/auth';

const router = Router();

router.use('/', authRouter);

router.use('/movies', Auth, moviesRouter);
router.use('/users', Auth, usersRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Такой страницы не существует.'));
});

export default router;