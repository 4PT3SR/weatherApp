const request = require('postman-request');





function getlocation(location='',callback) {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1Ijoia3ZucWNoYXNlIiwiYSI6ImNsMHVyYmRvNjA3MGgzam50ejN1b3FvaGwifQ.9s9p8Ye7bw5ZYo84KSprMQ&limit=1`

    request({url:url,json:true},(err,res,body) => {
        if(err) {
            return  callback('Connect to the internet')
          } else if(body.features.length === 0) {
            return callback('Please enter a valid location');
          }

        
       callback(err,body.features[0].center)

    // console.log(body.features[0].center)
    })
}

// getlocation('manchester',(err,data) => {
//     console.log(err,data)
// });
// getlocation('hbfknbfjk',(err,body)=> {
//     console.log(err);
//     console.log(body);
// });

module.exports = getlocation;