const sha256=require('sha256')

module.exports.EncryptPassword=(Password)=>{
    const CryptrPassword=sha256(Password)
    return CryptrPassword
}

module.exports.CheckPassword=(Password,CryptrPassword)=>{
    const EncodePassword=sha256(Password)
    if(EncodePassword==CryptrPassword){
        return true
    }else{
        return false
    }
}