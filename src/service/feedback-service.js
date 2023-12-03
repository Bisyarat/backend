import { prismaClient } from "../application/database.js";
import { createFeedbackValidation } from "../validation/feedback-validation.js";
import { validate } from "../validation/validation.js";


const create = async(request) =>{
    const data = validate(createFeedbackValidation,request)

    return prismaClient.feedback.create({
        data:data , 
        select:{
            id:true,
            keterangan:true,
            username:true
        }
    })
}

const get = async() =>{
    return prismaClient.feedback.findMany()
}


export default {
    create,
    get
}