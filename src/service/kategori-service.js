import { prismaClient } from "../application/database.js";
import { createKategoriValidation } from "../validation/kategori-validation.js";
import { validate } from "../validation/validation.js";

const create = async(request) =>{
    const data = validate(createKategoriValidation,request)

    return prismaClient.kategori.create({
        data:data , 
        select:{
            id:true,
            nama_kategori:true,
            penjelasan:true
        }
    })
}

export default {
    create
}