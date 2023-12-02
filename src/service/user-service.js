import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { getUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js";
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

const update = async (request) => {
    const user = validate(updateUserValidation,request);

    const validateUser = await prismaClient.user.count({
        where:{
            id:user.id
        }
    });

    if(validateUser !== 1){
        throw new ResponseError(404,"User is not found")
    }

    const data = {};
    if(user.email){
        const validateEmail = await prismaClient.user.count({
            where:{
                email:user.email
            }
        });
    
        if(validateEmail === 1){
            throw new ResponseError(400 , "Email already exist") 
        }else{
            data.email=user.email;
        }

    }

    if(user.username){
        const validateUsername = await prismaClient.user.count({
            where:{
                username:user.username
            }
        });
    
        if(validateUsername === 1){
            throw new ResponseError(400 , "Username already exist") 
        }else{
            data.username=user.username;
        }
    }

    if(user.name){
        data.name=user.name;
    }

    if(user.password){
        data.password= await bcrypt.hash(user.password,10);
    }

    return prismaClient.user.update({
        where:{
            id:user.id
        },
        data:data,
        select:{
            id:true,
            email:true,
            username:true,
            name:true,
        }
    })
}

const logout = async(id)=>{
    id = validate(getUserValidation,id);

    const user = await prismaClient.user.findUnique({
        where:{
            id : id
        }
    })
    
    if(!user){
        throw new ResponseError(404,"User is not found")
    }

    return prismaClient.user.update({
        where:{
            id:id
        },
        data:{
            token:null
        },select:{
            id:true
        }
    })
    
}


export default {
    register,
    login,
    get,
    update ,
    logout
}