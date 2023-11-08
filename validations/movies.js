import { celebrate } from 'celebrate';
import Joi from 'joi';
import { urlPattern } from '../utils/constants';

export const createMovieValidationSchema = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.string().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(urlPattern),
    trailerLink: Joi.string().required().regex(urlPattern),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().regex(urlPattern),
    movieId: Joi.number().required(),
  }),
});

export const deleteMovieValidationSchema = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
});
