import { Router } from 'express';
import { getFilms, createFilm, deleteFilm } from '../controllers/movies.js';
import { createMovieValidationSchema, deleteMovieValidationSchema } from '../validations/movies.js';

const moviesRouter = Router();

moviesRouter.get('/', getFilms);
moviesRouter.post('/', createMovieValidationSchema, createFilm);
moviesRouter.delete('/:id', deleteMovieValidationSchema, deleteFilm);

export default moviesRouter;
