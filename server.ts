import express from 'express'
import employeeRouter from './employee_router'

const server=express()
let port=3000




server.use('/employees',employeeRouter)
server.get('/',(req,res)=>{
    res.send("From home")
})
server.listen(port,()=>{
    console.log("listening on",port);
})