import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";


export const authMiddleware = async (req,res,next)=>{

    let token = req.get('Authorization');
    
    if(!token){
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    }else{
        token = token.replace("Bearer ","")
        const user = await prismaClient.user.findFirst({
            where:{
                token:token
            }
        });
        if(!user){
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        }else{
            req.user=user;
            next();
        }
    }
}