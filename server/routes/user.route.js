const UsersRoute = require('express').Router();
const UserModel = require('../models/user');

UsersRoute.get('/', async (req,res)=>{
    console.log(2);
    try {
        let data = await UserModel.FindAllUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error})
    }
})

UsersRoute.get('/:city', async (req,res)=>{
    try {
        let {city} = req.params;
        let data = await UserModel.FindByCity(city);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error})
    }
})

UsersRoute.post('/register',async (req,res)=>{
    try {
        let {name,password,date,city,age,email} = req.body;
        if(await UserModel.RegisterUser(name,password,date,city,age,email))
        res.status(201).json({msg:"Register Completed"})
        else{
            res.status(500).json({msg:"something went wrong"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

UsersRoute.post('/login',async (req,res)=>{
    try {
        console.log(req.body);
        let {name,password} = req.body;
        console.log(name);
        if(await UserModel.LoginUser(name,password))
        res.status(200).json({msg:"Success"})
        else{
            res.status(500).json({msg:"user not exist"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = UsersRoute;