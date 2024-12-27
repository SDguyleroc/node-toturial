const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('<h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> ');
// });

// Using Event Emitter API
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('<h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> ');
})

server.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');
});