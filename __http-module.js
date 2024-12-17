// HTTP
// brief introduction to http
// HTTP is the protocol for communication between browser and server
const http = require('http');

const server = http.createServer((req, res) => {
    
   if (req.url === '/'){
       
       res.end(`<h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> `);
   }

   else if (req.url === '/about'){
       
        res.end(`<h1>about page</h1> <p>this is our about page</p> <a href="/">back home</a> `);
    }else{res.end(`
        
    <h1>Oops!</h1>
    <p>we can't find page called ${req.url} </p>
    <a href="/">back home</a>
    `);}
    


});

server.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
});