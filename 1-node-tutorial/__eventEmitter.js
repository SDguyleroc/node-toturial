// Event-Driven Programming
// Used Heavily in Node.js
// Event-Driven means that the program waits for something to happen and then does something with it
// example - when a user clicks a button
// example - when a user types something in a text box

const EventEmitter = require('events');


const customEmitter = new EventEmitter();

const {readFile} = require('fs').promises;

const data = './content/first.txt';

const readFileAsync = async (path) => {
   
    try{
        const conetent = await readFile(path, 'utf8');
        console.log(conetent);
    }
    catch(err){
        console.log(`error with the file ${path} ${err.message}`);
    }
}

// on - listen for an event

customEmitter.on('response', (path) => {
    readFileAsync(data);
});



customEmitter.on('response2', (email, name) => {
    console.log(`here is: ${name} with email: ${email}`);
});


// emit - emit an event
process.stdin.on('data', (data) => {
    if(data.toString().trim() === 'exit'){
        process.exit();
    }
    
    customEmitter.emit('response');
});
customEmitter.emit('response2', 'K8d1s@example.com', 'Rahul');