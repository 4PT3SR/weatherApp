const path = require('path')
const express = require('express');
const hbs = require('hbs');
const getLocation = require('./geolocation.js');
const getWeather = require('./getweather.js');

// Paths
let publicPath = path.join(__dirname, './public');
let partialPath = path.join(__dirname, './template/partials');
let viewPath = path.join(__dirname, './template/views')

// ---------------------
const app = express();
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);



//The server
app.use(express.static(publicPath));

app.get("", (req,res) => {
    res.render('weather');
})
app.get("/about", (req,res) => {
    res.send('Welcome to the about page');
})



app.get("/weather", (req,res) => {
    getLocation(req.query.search,(err,center) => {
            if(err) {
               return res.send({error:err})
            }
        
            getWeather(center,(error,weatherInfo)=> {
               if(error) {
                return res.send(error)
            } 
            
            res.send(weatherInfo);
                });
        })

    console.log(req.query.search)
})


app.get("*", (req,res) => {
    res.send('Error 404');
})


app.listen(3000, () => {
    console.log('Listening at port 3000 . . .')
})