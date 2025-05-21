import express from 'express'
import employeeRouter from './employee_router'
import { loggerMiddleware } from './loggermiddleware'
import { processTimeMiddleware } from './processtimemiddle'

const server=express()
let port=3000


server.use(express.json())
server.use(loggerMiddleware)
server.use(processTimeMiddleware)
server.use('/employees',employeeRouter)

server.get('/',(req,res)=>{
    
    res.send("From home")
})
server.listen(port,()=>{
    console.log("listening on",port);
})