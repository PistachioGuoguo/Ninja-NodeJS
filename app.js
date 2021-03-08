const express = require('express');
const app = express();
const Blog = require('./models/blog');
const mongoose = require('mongoose');



app.set('view engine', 'ejs'); // under views folder

app.use(express.static('public'));

// connect to db

const dbURI = 'mongodb+srv://sam:1111@node-tutorial.u1k3h.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


// get 
app.get('/', (req, res) => {

    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/about-us', (req, res) => {
    res.redirect('about');  
});


// blog routes
app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title : 'All Blogs', blogs: result})
        })
        .catch( err => {
            console.log(arr);
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Home'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: 'Home'});  
});