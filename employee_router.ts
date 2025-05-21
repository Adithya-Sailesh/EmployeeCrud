import {Router} from 'express'
import Employee from './Employee'
const employeeRouter=Router()
let e:Employee[]=[
    {
        id:1,
        email:"jhon@gmail.com",
        name:"Jhon Doe",
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:2,
        email:"rahul@gmail.com",
        name:"Rahul Subru",
        createdAt:new Date(),
        updatedAt:new Date()
    }
]


employeeRouter.get("/",(req,res)=>{
    res.status(200).send(e)
    
    
})

employeeRouter.post("/",(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    let emp =new Employee();
    emp.name=name;
    emp.id=e.length+1;
    emp.email=email;
    emp.createdAt=new Date();
    emp.updatedAt=new Date();
    e.push(emp);
    res.status(200).send(e)
    
})

employeeRouter.get('/:id',(req,res)=>{
    const currUser=e.filter((obj)=>{
        return obj.id==parseInt(req.params.id)
    })
  
    res.status(200).send(currUser)
})

employeeRouter.patch('/:id',(req,res)=>{

    res.status(200).send("Employee  with id patched "+ req.params.id)
})

employeeRouter.put('/:id',(req,res)=>{

    res.status(200).send("Employee  with id put"+ req.params.id)
})

employeeRouter.delete('/:id',(req,res)=>{

    res.status(200).send("Employee deleted with id"+ req.params.id)
})



export default employeeRouter;
