import Joi from "joi";

const createSubKategoriValidation = Joi.object({
    nama_sub_kategori: Joi.string().max(50).required(),
    penjelasan:Joi.string().max(500).required()
})

const getSubKategoriValidation = Joi.number().positive().required();

export{
    createSubKategoriValidation ,getSubKategoriValidation
}