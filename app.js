const http = require('http');

const server = http.createServer((req, res) => {
    console.log("User hit the server");

    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> ');
    res.end();
}
);

server.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');

    
})