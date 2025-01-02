const express = require('express');
const app = express();

// app.get() is a function that is used to define a route
// this one is defining a route for the home page
app.get('/', (request, response) => {
    console.log (`user hit the resource at ${request.url}`);
    response.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (request, response) => {
    console.log (`user hit the resource at ${request.url}`);
    response.status(200).send('<h1>About Page</h1>');
});

app.all('*', (request, response) => { 
    response.status(404).send(`<h2>Resource called: ${request.url}  not found</h2>`)
}
);

// app.listen() is a function that is used to start the server and listen for requests
// this one ise listening on port 5000 and taking a callback function as an argument
// the callback function is a function that is called when the server is listening
// the function is displaying a message in the console
app.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');
});
            // HTTP methods
// they represent the different types of requests that can be made to a server
//---------------------------------------------------------------
// app.get()       Read
// app.post()      Create
// app.put()       Update
// app.delete()    Delete
// app.all()       Read and Create
// app.use()       Middleware
// app.listen()    Start the server     
