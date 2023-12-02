import Joi from "joi";

const registerUserValidation = Joi.object({
    email: Joi.string().max(50).required().email(),
    username: Joi.string().max(50).required(),
    password: Joi.string().max(200).required(),
    name: Joi.string().max(200).required()
})

export{
    registerUserValidation
}
