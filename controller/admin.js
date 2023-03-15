const Admin=require('../model/admin')
const initObjectID=require('../log/mongodb/initObjectID')
const timeHandler=require('../log/time/timeHandler')

var {validationResult} = require('express-validator');

var checkRoot=async ()=>{
    var root=await Admin.findOne({root:"true"}).exec()
    if(root==null){
        const id=initObjectID.initID()
        
        const admin=new Admin({
            _id:id,
            email:process.env.EMAIL_ADMIN,
            userName:process.env.USERNAME_ADMIN,
            password:process.env.PASSWORD_ADMIN,
            root:process.env.ROOT,
            ban:false,
            role:[],
            address:'',
            avatar:'',
            createAt:Date.now().toString(),
            updateAt:Date.now().toString(),
        })
        await Admin.create(admin).catch((errors)=>{
            res.status(500).send(errors)
        });
    }
}

module.exports.CreateAdmin=async (req,res,next)=>{
    checkRoot()
    var reqBody=req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors)
    }

    const id=initObjectID.initID()

    const newAdmin=new Admin({
        _id:id,
        email:reqBody.email,
        userName:reqBody.userName,
        password:reqBody.password,
        root:false,
        ban:false,
        role:[],
        address:reqBody.address,
        avatar:"",
        createAt:timeHandler.timeNow(),
        updateAt:timeHandler.timeNow(),

    })
     await Admin.create(newAdmin).catch((error)=>{
        console.log(error)
     })
    res.status(200).send("ok")
}

module.exports.CheckExistByEmail=async (req,res,next)=>{
    const email=req.body.email

    var admin=await Admin.findOne({email:email})
    if(admin){
        res.send('email exist')
    }
    next()
}