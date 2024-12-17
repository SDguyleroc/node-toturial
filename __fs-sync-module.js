const {readFileSync, writeFileSync} = require('fs');

// the above code is the same as this below
// const fs = require('fs');
// const writeFileSync = require('fs');
console.log('start');
// read first.txt file in the content folder using readFileSync
const first = readFileSync('./content/first.txt',  'utf8', );
// read second.txt file in the content folder using readFileSync
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, '\n', second);

// write to a new file in the content folder using writeFileSync

writeFileSync('./content/third.txt', `Hello everyone  this is a new file and here are contents of the first and second txt files: \n ${first} \n ${second} \n`);
// to append we can use the option {flag: 'a'}
writeFileSync('./content/third.txt', `Hello everyone  this is a new file and here are contents of the first and second txt files: \n ${first} \n ${second} \n`, {flag: 'a'});
console.log('done with this task');
console.log('starting the next task');
