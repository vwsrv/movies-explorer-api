import { Router } from 'express';
import authRouter from './auth.js';
import usersRouter from './users.js';
import moviesRouter from './movies.js';
import NotFoundError from '../errors/NotFoundError.js';
import Auth from '../middleware/auth.js';

const router = Router();

router.use('/', authRouter);

router.use('/movies', Auth, moviesRouter);
router.use('/users', Auth, usersRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Такой страницы не существует.'));
});

export default router;