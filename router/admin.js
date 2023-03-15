const express=require('express')
const Router=express.Router()
const controllerAdmin=require('../controller/admin')

const validate=require('../validation/admin')
Router.post('',validate.validateRegisterCustomer(),controllerAdmin.CheckExistByEmail,controllerAdmin.CreateAdmin)

module.exports=Router;