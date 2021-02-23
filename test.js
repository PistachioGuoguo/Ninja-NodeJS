const fs = require('fs');


// read file
fs.readFile('file1.txt', (err, data)=>{ // async
    if (err){
        console.log('Err');
    }else{
        console.log(data.toString());
    }
})

console.log('This line fires first');

// write

// fs.writeFile('blog.txt','Hello', ()=>{
    
// })

// directories fs.mkdir, fs.rmdir

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{

//     })
// }

