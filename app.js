const express = require('express');
const app = express();
const Blog = require('./models/blog');
const mongoose = require('mongoose');


app.set('view engine', 'ejs'); // under views folder

app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); // pass url data to handler (POST)

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
    Blog.find().sort({createdAt : -1}) // sort by desc createTime
        .then((result) => {
            console.log(result);
            res.render('index', {title : 'All Blogs', blogs: result})
        })
        .catch( err => {
            console.log(arr);
        })
});


app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then( (result) => {
            res.redirect('/blogs');
        })
        .catch( err => {
            console.log(err);
        })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: 'Home'});  
});