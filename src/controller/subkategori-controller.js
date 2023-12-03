import subkategoriService from "../service/subkategori-service.js";

const create = async(req,res,next) =>{
    try{
        const result = await subkategoriService.create(req.body);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const get = async(req,res,next) =>{
    try{
        const result = await subkategoriService.get();
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const getById = async(req,res,next) =>{
    try{
        const result = await subkategoriService.getById(req.params.id);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

export default{
    create ,get ,getById
}