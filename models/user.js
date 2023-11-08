import mongoose from 'mongoose';
import validate from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(v) {
        return validate.isEmail(v);
      },
      message: (props) => `Укажите корректный адрес электронной почты: ${props.value}.`,
    },
  },
  password: {
    type: String,
    required: {
      value: true,
      message: 'Поле password является обязательнымю.',
    },
    select: false,
  },
  name: {
    type: String,
    required: {
      value: true,
      message: 'Поле name является обящательным.',
    },
    minlength: 2,
    maxlength: 30,
  },
}, { versionKey: false, timestamps: true });

const User = mongoose.model('user', userSchema);
export default User;
