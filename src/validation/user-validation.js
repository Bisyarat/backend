import Joi from "joi";

const registerUserValidation = Joi.object({
    email: Joi.string().max(50).required().email(),
    username: Joi.string().max(50).required(),
    password: Joi.string().max(200).required(),
    name: Joi.string().max(200).required()
    
})



const loginUserValidation = Joi.object({
    email: Joi.string().max(50).email().required(),
    password: Joi.string().max(200).required()
})

const getUserValidation = Joi.number().required();

const updateUserValidation = Joi.object({
    id: Joi.number().required(),
    email: Joi.string().max(50).email().optional(),
    username: Joi.string().max(50).optional(),
    password: Joi.string().max(200).optional(),
    name: Joi.string().max(200).optional()
    
})
export{
    registerUserValidation ,
    loginUserValidation,
    getUserValidation,
    updateUserValidation
}
