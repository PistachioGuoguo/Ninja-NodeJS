const express = require('express');
const app = express();

app.listen(3000);

app.set('view engine', 'ejs'); // under views folder
// app.set('views','myviews'); // set diff folder of 'views'

// get 
app.get('/', (req, res) => {

    const blogs = [
        {title: 'I am happy today', snippet: 'Happy'},
        {title: 'Good luck in future', snippet: 'You got it!'},
        {title: 'Pistachio is cute', snippet: 'Cute pistachios'},
    ]

    res.render('index', {title: 'Home', blogs});
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