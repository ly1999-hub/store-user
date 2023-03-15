const Admin=require('../model/admin')
const initObjectID=require('../log/mongodb/initObjectID')

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
    var root=await Admin.findOne({root:"true"}).exec()
    
    res.status(200).send("ok")
}