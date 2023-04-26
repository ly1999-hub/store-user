
const shoe=require('../../model/query/shoe.js')
module.exports.All=async (req,res,next)=>{
    const page=req.params.page
    const data= await shoe.All(5,page)
    if (!data){
        res.status(404).json({data:"",error:"Not Found"})
    }else{
        const totalPages= await shoe.totalPages(5)
        res.status(200).json({page:totalPages,data:data,error:""})
    }
}