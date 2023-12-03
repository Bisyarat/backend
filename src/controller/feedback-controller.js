import feedbackService from "../service/feedback-service.js";

const create = async(req,res,next) =>{
    try{
        const username = req.user.username;
        const request = req.body;
        request.username = username
        const result = await feedbackService.create(request);
        res.status(200).json({
            data:result
        });
    }catch(e){
        next(e);
    }
}

export default {
    create
}
