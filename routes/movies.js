import { Router } from 'express';
import { getFilms, createFilm, deleteFilm } from '../controllers/movies';
import { createMovieValidationSchema, deleteMovieValidationSchema } from '../validations/movies';

const moviesRouter = Router();

moviesRouter.get('/movies', getFilms);
moviesRouter.post('/movies', createMovieValidationSchema, createFilm);
moviesRouter.delete('/movies/:id', deleteMovieValidationSchema, deleteFilm);

export default moviesRouter;
