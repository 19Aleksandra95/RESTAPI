const Joi = require('joi');

exports.contact = Joi.object()
.keys({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),
    email: Joi.string()
    .email(),
    phone: Joi.string()
    .min(14)
});