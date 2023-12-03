
import kategoriService from "../service/kategori-service.js";

const create = async(req,res,next) =>{
    try{
        const result = await kategoriService.create(req.body);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const get = async(req,res,next) =>{
    try{
        const result = await kategoriService.get();
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const getById = async(req,res,next) =>{
    try{
        const result = await kategoriService.getById(req.params.id);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

export default{
    create ,get , getById
}