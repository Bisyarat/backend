import riwayatService from "../service/riwayat-service.js";

const create = async(req,res,next) =>{

    try{
        const id_user = req.user.id;
        const request = req.body;
        request.id_user = id_user;
        const result = await riwayatService.create(request);
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