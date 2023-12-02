import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";

const register = async(request) => {
    const user = validate(registerUserValidation,request);

    const validateUsername = await prismaClient.user.count({
        where:{
            username:user.username
        }
    });

    if(validateUsername === 1){
        throw new ResponseError(400 , "Username already exist") 
    }

    const validateEmail = await prismaClient.user.count({
        where:{
            email:user.email
        }
    });

    if(validateEmail === 1){
        throw new ResponseError(400 , "Email already exist") 
    }

    user.password = await bcrypt.hash(user.password,10);

    return prismaClient.user.create({
            data:user,
            select:{
                id:true,
                email:true,
                username:true,
                name:true,
            }
        }) 
}

export default {
    register
}