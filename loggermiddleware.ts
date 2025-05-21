import { NextFunction,Request,Response } from "express";



export const loggerMiddleware =(req:Request,res:Response,next:NextFunction)=>{
    res.on("finish",()=>{
        const statuscode=res.statusCode;
        console.log(`${new Date().toISOString() }${req.method} ${req.originalUrl} statuscode= ${statuscode}`)
    })
    next()
}