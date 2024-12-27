const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> ');
    }
    else if (req.url === '/about') {
        // Blocking code
        // this code will block the event loop
        // meaning the rest of the code will not run until the blocking code is finished which is the loop below
        for (let i = 0; i < 1000; i++) {
            for(j =0; j <1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('<h1>about page</h1> <p>this is our about page</p> <a href="/">back home</a> ');
    }
    else {
        res.end(`
        
        <h1>Oops!</h1>
        <p>we can't find page called ${req.url} </p>
        <a href="/">back home</a>
        `);
    }

});

server.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');
});