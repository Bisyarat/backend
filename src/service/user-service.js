import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { getUserValidation, loginUserValidation, registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";

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


const login = async(request) => {
    const loginRequest = validate(loginUserValidation,request);


    const user = await prismaClient.user.findUnique({
        where:{
                email : loginRequest.email
        },select:{
            id:true,
            password:true
        }
    })

    if(!user){
        throw new ResponseError(401,"Email or password is wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password,user.password)

    if(!isPasswordValid){
        throw new ResponseError(401,"Email or password is wrong");
    }

    const token = uuid().toString()

    return await prismaClient.user.update({
        data:{
            token:token
        },
        where:{
            id: user.id
        },
        select:{
            token:true
        }
    })
}

const get = async (id) => {
    id = validate(getUserValidation,id)

    const user = await prismaClient.user.findUnique({
        where:{
            id : id
        },
        select:{
            id:true,
            email:true,
            username:true,
            name:true,
        }
    })
    
    if(!user){
        throw new ResponseError(404,"User is not found")
    }
    
    return user;
}

export default {
    register,
    login,
    get
}