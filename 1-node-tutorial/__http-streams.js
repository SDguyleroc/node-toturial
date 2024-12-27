var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){
  // const text = fs.readFileSync('./content/bigFile.txt', 'utf-8');
  // response.end(` <h1>home page</h1> <p>this is our home page</p> <a href="/about">about</a> <p>${text}</p>` ); 

  const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf-8');
  fileStream.on('open', () => {
    fileStream.pipe(response);
  })

  fileStream.on('error', (err) => {
    response.end(err);
  })
})
.listen(5000);