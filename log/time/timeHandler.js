module.exports.timeNow=()=>{
    return Date.now().toString()
}

module.exports.toDateTime=(secs)=>{
    var t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    //normalDate = new Date(sec).toLocaleString('en-GB',{timeZone:'UTC'})
    //normalDate: "10/08/2021, 18:08:08"
    return t;
}