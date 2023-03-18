const  mongoose=require('mongoose')

var AdminSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    userName:String,
    password:String,
    root:Boolean,
    ban:Boolean,
    permission:Array,
    address:String,
    avatar:String,
    createAt:String,
    updateAt:String,
})

var Admin=mongoose.model('Admin',AdminSchema,'admin')
module.exports=Admin