const  mongoose=require('mongoose')

var ShoeSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    _idShope:mongoose.Schema.Types.ObjectId,
    shoeName : String,
    description: String,
    image: [String],   
    price:Number,
    codeSale:Number,
    createdAt:String,
    updatedAt:String,
})

module.exports.Shoe=mongoose.model('Shoe',ShoeSchema,'shoe')
