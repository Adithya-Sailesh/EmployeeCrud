import { timeStamp } from "console";
import { NextFunction ,Request,Response} from "express";



export const processTimeMiddleware =(req:Request,res:Response,next:NextFunction)=>{
    let time1=Number(new Date());
    res.on(("finish"),()=>{
        let time2=Number(new Date())
        console.log(` time taken ${time2-time1}ms`)
    })
    next();
}