const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;

    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        
        if(err){
            console.log(err);
            return
        }

        const second = result;


        writeFile('./content/fourth.txt', `Hello everyone  this is a new file and here are contents of the first and second txt files: \n ${first} \n ${second} \n`, (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log('Done with this task');
            
        })
    });

});

console.log('starting the next task');