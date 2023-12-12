import { prismaClient } from "../application/database.js";

import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createKataValidation } from "../validation/kata-validation.js";

const create = async(request) => {
    const data = validate(createKataValidation,request)

    const validateKategori = await prismaClient.kategori.count({
        where:{
            nama_kategori:data.nama_kategori
        }
    })

    if(validateKategori !== 1){
        throw new ResponseError(404 , "No kategori found") 
    }

    const validateSubKategori = await prismaClient.subkategori.count({
        where:{
            nama_sub_kategori:data.nama_sub_kategori
        }
    })

    if(validateSubKategori !== 1){
        throw new ResponseError(404 , "No Sub kategori found") 
    }


    return prismaClient.kata.create({
        data:data , 
        select:{
            id:true,
            kata:true,
            nama_kategori:true,
            nama_sub_kategori:true,
            penjelasan:true
        }
    })
}

export default{
    create
}