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

export default{
    create
}