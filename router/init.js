const admin=require('./admin')

module.exports.Init=(app)=>{
    app.use('/admin',admin)
}