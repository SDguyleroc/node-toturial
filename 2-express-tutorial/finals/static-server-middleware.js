const express = require('express');
const path = require('path');
const app = express();


// app.use() is a function that is used to define a middleware
// this one is defining a middleware for static files
// it will serve static files from the public folder
// setup static and middleware
// static means it a file that server doesn't change
app.use(express.static('./public'));

// app.get('/', (request, response) => {
//     console.log (`user hit the resource at ${request.url}`);
//     response.sendFile(path.resolve(__dirname, './2-express-tutorial/navbar-app/index.html'));
// adding to stattic assets
// SSR = server side rendering
// });





app.all('*', ( request, response)=> {
     console.log (`user hit the resource at ${request.url}`);
    response.status(404).send(`<h2>Resource called: ${request.url}  not found</h2>`);       
});



app.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');
});