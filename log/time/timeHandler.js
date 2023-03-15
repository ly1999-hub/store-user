module.exports.timeNow=()=>{
    return Date.now().toString()
}

module.exports.toDateTime=(secs)=>{
    var t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    return t;
}