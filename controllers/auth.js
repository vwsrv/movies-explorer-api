import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import AuthError from '../errors/AuthError.js';
import ValidationError from '../errors/ValidationError.js';
import AlreadyExists from '../errors/AlreadyExists.js';
import generateToken from '../utils/token.js';
import { STATUS } from '../utils/constants.js';

export const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((createdUser) => {
      const { _id } = createdUser;
      res.status(STATUS.CREATED).send({ email, name, _id });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError('Переданы некорректные данные для создания пользователя.'));
      }
      if (err.code === 11000) {
        return next(new AlreadyExists('Такой пользователь уже зарегистрирован.'));
      }
      return next(err);
    });
};

export const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new AuthError('Неправильные имя пользователя, либо пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new AuthError('Неправильные имя пользователя, либо пароль');
          }
          const token = generateToken({ _id: user._id, email: user.email });
          res.cookie('jwtToken', token, { maxAge: '604800000', httpOnly: true, sameSite: true, secure: 'none' });
          return res.status(STATUS.OK).send({ _id: user._id });
        });
    })
    .catch(next);
};

export const logoutUser = (req, res) => {
  res.clearCookie('jwtToken');
  res.redirect('/signin');
};
