const express = require('express');
const app = express();
const {products, people} = require('./2-express-tutorial/data');


app.get('/', (request, response) => {
    response.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (request, response) => {
    response.json(products);

});

app.get('/api/people', (request, response) => {
    response.json(people);
})


// all() is a function that is used to define a route
// this one is defining a route for 404 not found urls
app.all('*', (request, response) => {
    response.status(404).send('<h1>Resource not found</h1>');
});



// listen for requests
app.listen(5000, 
    // callback function which is called when the server is listening
    () =>{
        console.log('server is listening on port 5000... http://Localhost:5000');

});

