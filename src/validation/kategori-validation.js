import Joi from "joi";

const createKategoriValidation = Joi.object({
    nama_kategori: Joi.string().max(50).required(),
    penjelasan:Joi.string().max(500).required()
})

const getKategoriValidation = Joi.number().positive().required();

export{
    createKategoriValidation ,
    getKategoriValidation
}