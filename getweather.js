const request = require('postman-request');
const getlocation = require('./geolocation.js')




function getWeather([long,lat]=[],callback) {
    let url = `http://api.weatherstack.com/current?access_key=b175cb28a4424d89006fc48c093a9568&query=${lat},${long}`;

    request({url:url,json:true},(err,res,body) => {
        if(err) {
          return  calback('Connect to the internet')
        } else if(body.error) {
          return  callback('Please enter a valid location');
        }

        // console.log(long,lat);
       callback(err,{temp:body.current.temperature,atmosphere:body.current.weather_descriptions[0],imgsrc:body.current.weather_icons[0],location: body.location.name,country:body.location.country})

    
    })
}

// getlocation('lagos',(err,center) => {
//     console.log('data for lagos', center);

    // getWeather([ -2.2451148, 53.47948920000002 ],(err,weatherInfo)=> {
    //     console.log(err);
    //         console.log(weatherInfo);
    //     });
// })




module.exports = getWeather;