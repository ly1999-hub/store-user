var mongoose = require('mongoose');

module.exports.initID=function(){
    return new mongoose.Types.ObjectId();
}