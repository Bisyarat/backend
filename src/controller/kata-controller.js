import { logger } from "../application/logging.js";
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


const deleteById = async(req,res,next) =>{
    try{
        const result = await kataService.deleteById(req.params.id);
        res.status(200).json({
            data:"Delete kata success"
        });
    }catch(e){
        next(e);
    }
}

const get = async(req,res,next) =>{
    try{
        const result = await kataService.get();
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const getById = async(req,res,next) =>{
    try{
        const result = await kataService.getById(req.params.id);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

const getKataStatus = async(req,res,next) =>{
    try{
        const request = {
            nama_kategori : req.query.nama_kategori , 
            nama_sub_kategori : req.query.nama_sub_kategori ,
        }
        request.id_user = req.user.id
        const result = await kataService.getKataStatus(request);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

export default{
    create ,deleteById ,get ,getById ,getKataStatus
}