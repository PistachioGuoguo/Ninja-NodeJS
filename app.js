const express = require('express');
const app = express();

app.listen(3000);

app.set('view engine', 'ejs'); // under views folder
// app.set('views','myviews'); // set diff folder of 'views'

// get 
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/about-us', (req, res) => {
    res.redirect('about');  
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Home'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: 'Home'});  
});