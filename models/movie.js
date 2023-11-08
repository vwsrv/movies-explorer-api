import mongoose from 'mongoose';
import validate from 'validator';

const filmSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validate.isURL(v);
      },
      message: (props) => `Укажите корректный адрес электронной почты: ${props.value}.`,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validate.isURL(v);
      },
      message: (props) => `Укажите корректный адрес электронной почты: ${props.value}.`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validate.isURL(v);
      },
      message: (props) => `Укажите корректный адрес электронной почты: ${props.value}.`,
    },
  },
  owner: {
    type: String,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false, timestamps: true });
const Film = mongoose.model('film', filmSchema);

export default Film;
