import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createSubKategoriValidation, getSubKategoriValidation } from "../validation/subkategori-validation.js";

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

const get = async() =>{
    return prismaClient.subkategori.findMany()
}

const getById = async(id) =>{
    id = validate(getSubKategoriValidation,id)

    const subkategori = await prismaClient.subkategori.findFirst({
        where:{
            id : id
        },
        select:{
            id:true,
            nama_sub_kategori:true,
            penjelasan:true
        }
    })
    
    if(!subkategori){
        throw new ResponseError(404,"Sub Kategori is not found")
    }
    
    return subkategori;
}

export default{
    create , get , getById
}