import Joi from "joi";

const createRiwayatValidation = Joi.object({
  status: Joi.boolean().required(),
  url_video: Joi.string().max(100).optional(),
  id_kata: Joi.number().required(),
  id_user: Joi.number().required()
});

export { createRiwayatValidation };
