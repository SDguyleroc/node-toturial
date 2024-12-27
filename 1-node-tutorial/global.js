// Global object
console.log(`the global object: `);
console.log(global);
console.log("the global object ends here \n __________________________");

// The Global object is the root object of the Node.js environment.
// Global object is also known as the window object in the browser.
// The global object has properties and methods that are available in all scopes.

// setTimeout - will run a function after 1000ms. The function is passed in as an argument. The function is anonymous (no name).
console.log(`the timeout: yes it is not here because it has been called after 1 second`);
setTimeout(() => {
    console.log('This will run after 5 second');
}, 5000);



// process - info about env where the program is being executed
console.log(`the process: `);
console.log(process);
console.log("the process ends here \n __________________________");

// __filename - file name
// console.log(__filename);

// __dirname - path to current directory
console.log(`the __dirname: `);
console.log(__dirname);

console.log("the __dirname ends here \n __________________________");

// setInterval - will run a function every 1000ms. The function is passed in as an argument. The function is anonymous (no name).
// setInterval(() => {
//     console.log('hello world');
// }, 1000);
console.log("now timeout is running");