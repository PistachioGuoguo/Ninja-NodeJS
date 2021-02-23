const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const { isAbsolute } = require('path');
const { emitWarning } = require('process');

const server = http.createServer( (req, res)=>{
    // console.log(req.url, req.method);
    const num = _.random(0,20);
    console.log(num);

    res.setHeader('Content-Type','text/html'); // set header content type  'text/plain'
    
    // res.write('<p>hello, ninjas<p>');
    // res.end();

    let path = 'views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about'); // redirect
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break; 
    }


    fs.readFile(path, (err, data)=>{
        if (!err){
            // res.write(data);
            // res.end();
            res.end(data);
        }
    });

});



server.listen(3000, 'localhost', () => {  // localhost = 127.0.0.1 DNS
    console.log('listening for request on port 3000');
}); // portnumber



