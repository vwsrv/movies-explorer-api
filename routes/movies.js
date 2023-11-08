import { Router } from 'express';
import { getFilms, createFilm, deleteFilm } from '../controllers/movies';

const moviesRouter = Router();

moviesRouter.get('/movies', getFilms);
moviesRouter.post('/movies', createFilm);
moviesRouter.delete('/movies/:_id', deleteFilm);

export default moviesRouter;
