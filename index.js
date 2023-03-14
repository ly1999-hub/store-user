const express=require('express')
const app=express()
require('dotenv').config();

console.log(process.env.MONGODB_URI)

const initMongoDB=require('./package/mongodb/initDB')
initMongoDB.initMongoDB()
const initRouter=require('./router/init')

initRouter.Init(app)

app.listen(process.env.PORT,()=>{
    console.log(`server listening port: ${process.env.PORT}`)
})