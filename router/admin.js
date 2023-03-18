const express=require('express')
const Router=express.Router()
const controllerAdmin=require('../controller/admin')
const checkLogin=require('../utils/jwt')
const checkExist=require('../utils/checkExist')

const validate=require('../validation/admin')

Router.post('',validate.validateRegisterCustomer(),validate.CheckValidation,checkExist.CheckExistByEmail,controllerAdmin.Create)
Router.post('/login',validate.validationLoginByEmail(),controllerAdmin.LoginByEmail)
Router.get('/all',checkLogin.CheckToken,controllerAdmin.All)
Router.get('/:id',checkLogin.CheckToken,controllerAdmin.Detail)
Router.put('change-status',checkLogin.CheckToken)

module.exports=Router;