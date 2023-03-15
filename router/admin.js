const express=require('express')
const Router=express.Router()
const controllerAdmin=require('../controller/admin')
Router.post('',controllerAdmin.CreateAdmin)
Router.get("",function(req,res){
    res.status(200).send("ok")
})

module.exports=Router;