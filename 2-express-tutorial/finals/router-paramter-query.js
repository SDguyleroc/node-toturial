const express = require('express');
const {products, people} = require('./2-express-tutorial/data');
const app = express();

// here we define the / route which is the home page
// we display a link to the products page and link to people apis
app.get('/', (request, response) => {
    response.send('<h1>Home Page</h1> <a href="/api/products">Products</a> <br> <a href="/api/people">People</a>');
});

app.get('/api/products', (request, response) => {

    // Here we are mapping over the products array and returning only the id, name and image
    /**
     * const newProducts = products.map((product) => {
     *      const {id, name, image} = product;
     *      return {id, name, image};
     * }) 
     * 
     * how does this work?
     * 
     * we creat a new variable called newProducts
     * we map over the products array
     * we destructure the id, name and image from the product object
     * we return a new object with the id, name and image
     * 
     * mapping over the products array and returning only the id, name and image
     * this means we are creating a new array called newProducts
     * which is a copy of the products array but with only the id, name and image
     *  we can also write it like this
     * const newProduct = products;
     * newProduct.map((product) => {
     *      const {id, name, image} = product;
     *      return {id, name, image};               
     *})
     * 
     * map is a function that is used to map over an array
     * 
     * It takes in a callback function
     * 
     * The callback function is called for each element in the array
     */
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    response.json(newProducts);
});


app.get('/api/products/:productID', (request, response) => {

    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })

   console.log(request.params);

   const {productID} = request.params;

   const singleProduct = products.find ((product) => product.id === Number(productID));
   if(!singleProduct){
       return response.status(404).send(`<h1>Product ${request.params.productID} not found</h1>`);
   }
   
   console.log(singleProduct);
   response.json([singleProduct, newProducts]);
    
});

app.get('/api/products/:productId/reviews/:reviewId', (request, response) => {
    console.log(request.params);
    response.send('hello world');
});

app.get('/api/people', (request, response) => {
    response.json(people);
})

// app.all('*', (request, response) => {
//     response.status(404).send('<h1>Resource not found</h1>');
        
// })

app.get('/api/v1/query', (request, response) => {
    console.log(request.query);

    const { search, limit } = request.query;

    // Create a copy of the products array to avoid mutating the original
    let sortedProducts = [...products];

    // Check if search is provided
    if (search) {
        // Filter products based on the search query (case-insensitive)
        sortedProducts = sortedProducts.filter((product) => 
            product.name.toLowerCase().includes(search.toLowerCase() )
        );
    }

    // If limit is provided, slice the array to return only the number of products specified
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // response.status(200).send('No products matched your search');
        return response.status(200).json({success: true, data: []});
    }

    // Return the filtered and/or limited products
   return response.status(200).json(sortedProducts);
});



app.listen(5000, () => {    
    console.log('server is listening on port 5000... http://Localhost:5000');
});

