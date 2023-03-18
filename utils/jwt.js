const jwt=require('jsonwebtoken')
const Admin=require('../model/admin')
module.exports.CheckToken=async (req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
        req.userId=decoded.sub
      });
      next()
}