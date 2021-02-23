const { applyEachSeries } = require('async');
const express = require('express');
const app = express();




// register view engine

app.set('view engine', ejs);




// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
    // res.send('<p>homs page</p>');
    res.sendFile('./views/index.html',{root:__dirname});
});


app.get('/about', (req, res) => {
    // res.send('<p>homs page</p>');
    res.sendFile('./views/about.html',{root:__dirname});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404, put at bottom as the last 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});