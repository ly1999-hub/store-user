const jwt = require('jsonwebtoken');
var {validationResult} = require('express-validator');

const Admin=require('../model/admin')
const initObjectID=require('../log/mongodb/initObjectID')
const timeHandler=require('../log/time/timeHandler')
const crypt=require('../utils/crypt')
const promissions=require('../log/const/Permissions')

module.exports.CheckRoot=async ()=>{
    var root=await Admin.findOne({root:"true"}).exec()
    if(root==null){
        const id=initObjectID.initID()
        
        const admin=new Admin({
            _id:id,
            email:process.env.EMAIL_ADMIN,
            userName:process.env.USERNAME_ADMIN,
            password:crypt.EncryptPassword(process.env.PASSWORD_ADMIN),
            root:process.env.ROOT,
            ban:false,
            permission:[],
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

module.exports.Create=async (req,res,next)=>{
    var reqBody=req.body

    var newPermission=[]
    reqBody.permission.forEach(element => {
        const promiss=promissions.Permissions.find(promission=>promission.Code==element)
        newPermission.push(promiss)
    });

    const id=initObjectID.initID()
    const encodePassword=crypt.EncryptPassword(reqBody.password)
    const newAdmin=new Admin({
        _id:id,
        email:reqBody.email,
        userName:reqBody.userName,
        password:encodePassword,
        root:false,
        ban:false,
        permission:newPermission,
        address:reqBody.address,
        avatar:"",
        createAt:timeHandler.timeNow(),
        updateAt:timeHandler.timeNow(),

    })
    await Admin.create(newAdmin)

    res.status(200).json("ok")
}

//
module.exports.CheckExistByEmail=async (req,res,next)=>{
    const email=req.body.email

    var admin=await Admin.findOne({email:email})
    if(admin){
        res.send('email exist')
    }
    next()
}

// LoginByEmail ...
module.exports.LoginByEmail=async(req,res,next)=>{
    var login=req.body
    //console.log(req.headers.authorization.split(' ')[1])

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors)
    }
    await Admin.findOne({email:login.email}).then(user=>{
        if(crypt.CheckPassword(login.password,user.password)){
            const token=jwt.sign({sub:String(user._id)},process.env.SECRET_KEY,{ expiresIn: '1h' })
            res.status(200).json({token})
        }else{
            res.status(401).json("error pass")
        }
    }).catch(errors=>{
        res.status(500).json(errors)
    })
}

// Get All ...
module.exports.All=async (req,res,next)=>{
    console.log("id:" +req.userId)
    await Admin.find().then((User)=>{
        res.status(200).json(User)
    }).catch(errors=>{
        res.status(500).json(errors)
    })
}


// Get Detail ...
module.exports.Detail=async (req,res,next)=>{
    const id=req.params.id
    await Admin.findById(id).then(user=>{
        res.status(200).json(user)
    }).catch(error=>{
        res.status(500).json(error)
    })
}

