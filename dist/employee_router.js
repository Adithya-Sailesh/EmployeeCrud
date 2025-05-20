"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Employee_1 = __importDefault(require("./Employee"));
const employeeRouter = (0, express_1.Router)();
let e = [
    {
        id: 1,
        email: "jhon@gmail.com",
        name: "Jhon Doe",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        email: "rahul@gmail.com",
        name: "Rahul Subru",
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
employeeRouter.get("/", (req, res) => {
    res.status(200).send(e);
});
employeeRouter.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    let emp = new Employee_1.default();
    emp.name = name;
    emp.id = Employee_1.default.length + 1;
    emp.email = email;
    emp.createdAt = new Date();
    emp.updatedAt = new Date();
    e.push(emp);
    res.status(200).send(e);
});
employeeRouter.get('/:id', (req, res) => {
    const currUser = e.filter((obj) => {
        return obj.id == parseInt(req.params.id);
    });
    res.status(200).send(currUser);
});
employeeRouter.patch('/:id', (req, res) => {
    res.status(200).send("Employee  with id patched " + req.params.id);
});
employeeRouter.put('/:id', (req, res) => {
    res.status(200).send("Employee  with id put" + req.params.id);
});
employeeRouter.delete('/:id', (req, res) => {
    res.status(200).send("Employee deleted with id" + req.params.id);
});
exports.default = employeeRouter;
//# sourceMappingURL=employee_router.js.map