// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
// In Node you only run one file at a time
// Create a new file and require it
// require('module')

const names = require('./__names');
const sayHi = require('./__utils');

const data = require('./alternative-flavor');

require('./__mind-granade');


console.table(data.items);
const person ={
    "name": data.singlePerson.name
}

console.table(person);

 console.log(names);
 sayHi('Guy-leroc');
 sayHi(names.name1);
 sayHi(names.name2);