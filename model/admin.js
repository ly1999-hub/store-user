const  mongoose=require('mongoose')

var userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    userName:String,
    password:String,
    root:Boolean,
    ban:Boolean,
    role:Array,
    address:String,
    avatar:String,
    createAt:String,
    updateAt:String,
})

var User=mongoose.model('User',userSchema,'user')
module.exports=User