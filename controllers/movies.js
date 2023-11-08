import Film from '../models/movie';
import { STATUS } from '../utils/constants';
import CastError from '../errors/CastError';
import NotFoundError from '../errors/NotFoundError';
import ValidationError from '../errors/ValidationError';

export const getFilms = (req, res, next) => {
  const userId = req.user._id;
  Film.find({ owner: userId })
    .then((films) => {
      res.status(STATUS.OK).send({ data: films });
    })
    .catch(next);
};

export const createFilm = (req, res, next) => {
  const {
    country, director, duration, year,
    description, image, trailerLink, nameRU,
    nameEN, thumbnail, movieId,
  } = req.body;
  Film.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((film) => {
      res.status(STATUS.CREATED).send(film);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new CastError('Переданы некорректные данные для создания фильма.'));
      } return next(err);
    });
};

export const deleteFilm = (req, res, next) => {
  Film.findById(req.params.id)
    .then((film) => {
      if (!film) {
        throw new NotFoundError('Указан несуществующий _id фильма.');
      }
      if (film.owner.toString() !== req.user._id) {
        throw new ValidationError('Недостаточно прав для удаления фильма.');
      }
      return Film.deleteOne(film);
    })
    .then((film) => {
      res.status(STATUS.OK).send(film);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new CastError('Переданы некорректные данные для удаления фильма.'));
      } return next(err);
    });
};
