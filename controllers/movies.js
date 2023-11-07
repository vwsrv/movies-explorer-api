import Film from '../models/movie.js';
import { STATUS } from '../utils/constants.js';
import CastError from '../errors/CastError.js';
import NotFoundError from '../errors/NotFoundError.js';
import ValidationError from '../errors/ValidationError.js';

export const getFilms = (req, res, next) => {
    const { userId } = req.user.id;
    Film.find({ userId })
        .then(films => {
            res.status(STATUS.OK).send({data: films})
        })
        .catch(next);
}

export const createFilm = (req, res, next) => {
    const { country, director, duration, year, 
            description, image, trailer, nameRU, 
            nameEN, thumbnail, movieId } = req.body;
    Film.create({ country, director, duration, year, 
        description, image, trailer, nameRU, 
        nameEN, thumbnail, movieId, owner: req.user._id})
        .then(film => {
            res.status(STATUS.CREATED).send(film)
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                return next(new CastError('Переданы некорректные данные для создания фильма.'))
            } return next(err);
        });
}

export const deleteFilm = (req, res, next) => {
    const { cardId } = req.params;
    Film.deleteOne(cardId)
        .then((film) => {
            if (!film) {
                throw new NotFoundError('Указан несуществующий _id фильма.')
            }
            if (film.owner.toString() !== req.user._id) {
                throw new ValidationError('Недостаточно прав для удаления фильма.')
            }
            return Film.deleteOne(film)
        })
        .then(card => {
            res.status(STATUS.OK).send(card)
        })
        .catch(err => {
            if (err.name === 'CastError') {
                next(new CastError('Переданы некорректные данные для удаления фильма.'));
            } return next(err);
        });
}