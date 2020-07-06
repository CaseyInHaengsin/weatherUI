const express = require('express');
const path = require('path');

const hbs = require('hbs');


const app = express();

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);
//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Casey"
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Casey"
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Casey"
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {

    })
})


app.get('*', (req, res) => {
    res.send("My 404 page");

})


app.listen(3000)