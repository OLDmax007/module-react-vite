import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .alphanum()
        .min(2)
        .max(25)
        .required()
        .messages({
            'string.base': 'Brand must be a string',
            'string.alphanum': 'Brand must only contain alphanumeric characters',
            'string.min': 'Brand must be at least 2 characters long',
            'string.max': 'Brand must be at most 25 characters long',
            'any.required': 'Brand is required'
        }),
    price: Joi.number()
        .min(1000)
        .max(500000)
        .required()
        .messages({
            'number.base': 'Price must be a number',
            'number.min': 'Price must be at least 1000',
            'number.max': 'Price must be at most 500000',
            'any.required': 'Price is required'
        }),
    year: Joi.number()
        .min(2000)
        .max(2025)
        .required()
        .messages({
            'number.base': 'Year must be a number',
            'number.min': 'Year must be at least 2000',
            'number.max': 'Year must be at most 2025',
            'any.required': 'Year is required'
        }),
});

export default carValidator;
