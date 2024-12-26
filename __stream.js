/*
  Streams in Node.js:
  - Handle large data in chunks
  - 4 types:
    - Readable: read data from source (e.g. file, network)
    - Writable: write data to destination (e.g. file, network)
    - Duplex: both read and write (e.g. TCP connection)
    - Transform: modify data as it's piped through
  - Can be piped together
  - Emit events: data, end, error, finish
  - Used with fs, http, net modules
*/

const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt', 
  {
    highWaterMark: 90000, 
    encoding: 'utf8'
  });

//default 64kb
//last buffer - remainder
//highWaterMark - control size
// const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 90000});
// const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 90000, encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(result);


})

stream.on('error', (err)=>{
    console.log(err);
})