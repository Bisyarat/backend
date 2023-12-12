import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createRiwayatValidation } from "../validation/riwayat-validation.js";



const create = async(request) => {
    const data = validate(createRiwayatValidation,request)

    const validateKata = await prismaClient.kata.count({
        where:{
            id:data.id_kata
        }
    })

    if(validateKata !== 1){
        throw new ResponseError(404 , "No kata found") 
    }

    if(data.url_video === undefined){
        data.url_video = null;
    }

    return prismaClient.riwayatbelajar.create({
        data:data , 
        select:{
            id:true,
            status:true,
            url_video:true,
            id_kata:true
        }
    })


}

export default{
    create
}