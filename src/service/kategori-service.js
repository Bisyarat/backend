import { prismaClient } from "../application/database.js";
import { createKategoriValidation, getKategoriValidation } from "../validation/kategori-validation.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";

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

const get = async() =>{
    return prismaClient.kategori.findMany()
}

const getById = async(id) =>{
    id = validate(getKategoriValidation,id)

    const kategori = await prismaClient.kategori.findFirst({
        where:{
            id : id
        },
        select:{
            id:true,
            nama_kategori:true,
            penjelasan:true
        }
    })
    
    if(!kategori){
        throw new ResponseError(404,"Kategori is not found")
    }
    
    return kategori;
}

export default {
    create,
    get ,
    getById
}