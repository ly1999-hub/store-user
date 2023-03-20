const express=require('express')
const app=express()
const bodyParser=require('body-parser')
require('dotenv').config();

const initMongoDB=require('./package/mongodb/initDB')
const controller=require('./controller/admin')
initMongoDB.initMongoDB()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.url}`);
    next();
  });

controller.CheckRoot()
const initRouter=require('./router/init')

initRouter.Init(app)

app.listen(process.env.PORT,()=>{
    console.log(`server listening port: ${process.env.PORT}`)
})