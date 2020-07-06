const express = require('express');
const path = require('path');

const hbs = require('hbs');


const app = express();

const viewsPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);
//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath))

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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "Not Found",
        name: "Casey", 
        message: "Help item not found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "Not Found",
        name: "Casey", 
        message: "What are you doing here?"
    })

})


app.listen(3000)