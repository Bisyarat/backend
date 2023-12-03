import Joi from "joi";

const createFeedbackValidation = Joi.object({
    username: Joi.string().max(50).required(),
    keterangan:Joi.string().max(750)
})


export{
    createFeedbackValidation
}