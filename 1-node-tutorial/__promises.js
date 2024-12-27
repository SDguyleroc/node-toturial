const {readFile, writeFile} = require('fs').promises;

// const http  = require('http');

// const util = require('util');

// const readFilePromise = util.promisify(readFile);

// const writeFilePromise = util.promisify(writeFile);





    const start = async () => {

        try{
        const first = (await readFile('./content/first.txt', 'utf8'));
        const second = await readFile('./content/second.txt', 'utf8');

        await writeFile('./content/third.txt', `----------------------\n first.txt: \n ${first} \n----------------------\n second.txt:\n ${second} \n`, {flag: 'a'});
        const third = await readFile('./content/third.txt', 'utf8');

        console.log(first, '\n');
        console.log('----------------------');
        console.log(second, '\n');
        console.log('----------------------');
        console.log(third);

        }
        catch(err){
            console.log(err);
        }
    }
    
    start();




    // promises are used to handle async code
// const getText = (path) =>{
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//         if(err){
//             reject(err);

//         }else{
//             resolve(data);
//         //     http.createServer((req, res) => {
//         //     res.end(`<h1> data: ${data}</h1> `);
//         // }).listen(5000, () => {
//         //     console.log('server is listening on port 5000... http://Localhost:5000');
//         // });
        
//     }
// })

//     });
// }
    // getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));