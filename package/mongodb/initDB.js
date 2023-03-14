const mongoose = require('mongoose')

module.exports.initMongoDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch((error) => {
            console.log(error)
        })
}

