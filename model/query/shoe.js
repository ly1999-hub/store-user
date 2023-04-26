const { Shoe } = require("../products/shoe")

module.exports.totalPages=async (limit)=>{
    const count= await Shoe.countDocuments({}).exec()
    const totalPage=Math.ceil(count/limit)
    console.log(totalPage)
    return totalPage
}

module.exports.All=async (limit,page)=>{
    const data= await Shoe.find({}).limit(limit).skip((page-1)*limit).exec()
    console.log(data)
    return data
}

module.exports.FindById=async (id)=>{
    const data=await Shoe.findById(id).exec()
    return data
}