const Admin=require('../model/admin')
module.exports.CheckExistByEmail=async (req,res,next)=>{
    const email=req.body.email

    var admin=await Admin.findOne({email:email})
    if(admin){
        res.status(400).send('email exist')
    }else{
        next()
    }
}
