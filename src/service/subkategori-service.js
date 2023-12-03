import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createSubKategoriValidation } from "../validation/subkategori-validation.js";

const create = async(request) =>{
    const data = validate(createSubKategoriValidation,request)

    return prismaClient.subkategori.create({
        data:data , 
        select:{
            id:true,
            nama_sub_kategori:true,
            penjelasan:true
        }
    })
}

export default{
    create
}