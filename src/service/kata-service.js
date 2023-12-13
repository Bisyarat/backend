import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createKataValidation, getIdKataValidation, getKataStatusValidation } from "../validation/kata-validation.js";
import { logger } from "../application/logging.js";

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

    if(data.nama_sub_kategori){
        const validateSubKategori = await prismaClient.subkategori.count({
        where:{
            nama_sub_kategori:data.nama_sub_kategori
        }
    })

    if(validateSubKategori !== 1){
        throw new ResponseError(404 , "No Sub kategori found") 
    }}
    


    return prismaClient.kata.create({
        data:data , 
        select:{
            id:true,
            kata:true,
            nama_kategori:true,
            nama_sub_kategori:true,
            url_video:true,
            penjelasan:true
        }
    })
}

const deleteById = async(id) =>{
    id = validate(getIdKataValidation,id)

    const kata = await prismaClient.kata.findFirst({
        where:{
            id : id
        },
        select:{
            id:true
        }
    })
    
    if(!kata){
        throw new ResponseError(404,"Id is not found")
    }

    return await prismaClient.kata.delete({
        where:{
            id : id
        }
    })

}

const get = async() =>{
    return prismaClient.kata.findMany()
}

const getById = async(id) =>{
    id = validate(getIdKataValidation,id)

    const kata = await prismaClient.kata.findFirst({
        where:{
            id : id
        },
        select:{
            id:true,
            kata:true,
            nama_kategori:true,
            nama_sub_kategori:true,
            url_video:true,
            penjelasan:true
        }
    })
    
    if(!kata){
        throw new ResponseError(404,"Id is not found")
    }

    return kata;

}

const getKataStatus = async(request) => {
    const data = validate(getKataStatusValidation,request)

    if(data.nama_kategori && data.nama_sub_kategori){
        throw new ResponseError(404,"Only use one query params")
    }

    let data2 = {};

    logger.info(data.nama_kategori)
    logger.info(data.nama_sub_kategori)
    if(data.nama_kategori){
        const validateKategori = await prismaClient.kategori.count({
            where:{
                nama_kategori:data.nama_kategori
            }
        })
    
        if(validateKategori !== 1){
            throw new ResponseError(404 , "No kategori found") 
        }

        data2 = await prismaClient.kata.findMany({
            where:{
                nama_kategori:data.nama_kategori
            },select:{
                id:true,
                kata:true,
                
                riwayat_belajar:{
                    where:{
                        id_user:data.id_user
                    },select:{
                        status:true,
                    }
                }
            }
        })
        
        return data2
       
    }

    if(data.nama_sub_kategori){
        const validateSubKategori = await prismaClient.subkategori.count({
            where:{
                nama_sub_kategori:data.nama_sub_kategori
            }
        })
    
        if(validateSubKategori !== 1){
            throw new ResponseError(404 , "No kategori found") 
        }

        data2 = await prismaClient.kata.findMany({
            where:{
                nama_sub_kategori:data.nama_sub_kategori
            },select:{
                id:true,
                kata:true,
                
                riwayat_belajar:{
                    where:{
                        id_user:data.id_user
                    },select:{
                        status:true,
                    }
                }
            }
        })
        
        return data2
       
    }
    return data2
}
    

export default{
    create ,deleteById , get ,getById ,getKataStatus
    
}