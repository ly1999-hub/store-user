const express=require('express')
const Router=express.Router()

Router.get("",function(req,res){
    res.status(200).send("ok")
})

module.exports=Router;