import kataService from "../service/kata-service.js";

const create = async(req,res,next) =>{
    try{
        const result = await kataService.create(req.body);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

export default{
    create
}