const http = require('http');
const {readFileSync} = require('fs');

// get all files
 const HomePage = readFileSync('./2-express-tutorial/navbar-app/index.html');
 const styles = readFileSync('./2-express-tutorial/navbar-app/styles.css');
 const logo = readFileSync('./2-express-tutorial/navbar-app/logo.svg');
 const browserApp = readFileSync('./2-express-tutorial/navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    console.log(`req made to path: ${req.url}`);

    const url = req.url;
// home page: If url is / (home page)
    if (url === '/') {
        

        // response header success status code (200) and content type which is html
        res.writeHead(200, {'content-type': 'text/html'});
        // response body
        res.write(HomePage);

        res.end();

    } // styles page: If url is /styles.css
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(styles);
        res.end();

    } 
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(logo);
        res.end();

    }
    else if(url === '/browser-app.js')
    {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(browserApp);
        res.end();
    }
    
    // 404 page if url is not found
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Oops!</h1> <p>we can\'t find page called ' + url + ' </p> <a href="/">back home</a> ');
        res.end();
    }


    
}
);

server.listen(5000, () => {
    console.log('server is listening on port 5000... http://Localhost:5000');

    
})