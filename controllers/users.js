import User from '../models/user.js';
import { STATUS } from '../utils/constants.js';
import NotFoundError from '../errors/NotFoundError.js';
import ValidationError from '../errors/ValidationError.js';
import AlreadyExists from '../errors/AlreadyExists.js';

export const getCurrentUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(STATUS.OK).send(user);
    })
    .catch(next);
};

export const updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      throw new NotFoundError('Пользователя с таким _id не существует');
    })
    .then((updatedUserInfo) => {
      res.status(STATUS.OK).send(updatedUserInfo);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError('Переданы некорретные данные для обновления информации о пользователе'));
      }
      if (err.code === 11000) {
        return next(new AlreadyExists('Такой пользователь уже зарегистрирован.'));
      }
      return next(err);
    });
};
