import Joi from "joi";

const createKataValidation = Joi.object({
  kata: Joi.string().max(100).required(),
  url_video: Joi.string().max(100).required(),
  penjelasan: Joi.string().max(500).required(),
  nama_kategori: Joi.string().max(50).required(),
  nama_sub_kategori: Joi.string().max(50).optional(),
});

const getKataStatusValidation = Joi.object({
  nama_kategori: Joi.string().max(50).optional(),
  nama_sub_kategori: Joi.string().max(50).optional(),
  id_user: Joi.number().required()
})

const getIdKataValidation = Joi.number().positive().required();


export { createKataValidation ,getIdKataValidation ,getKataStatusValidation};
