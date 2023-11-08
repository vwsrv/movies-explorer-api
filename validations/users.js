import { celebrate } from "celebrate";
import Joi from "joi";
import { emailAngular } from '../utils/constants';

export const updateUserInfoValidationSchema = celebrate({
    body: Joi.object().keys({
        email: Joi.string().regex(emailAngular).required(),
        name: Joi.string().min(2).max(30).required(),
    }),
})