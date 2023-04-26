const express=require('express')
const Router=express.Router()
const controller=require('../../controller/products/shoe.js')

Router.get('/:page',controller.All)
module.exports=Router