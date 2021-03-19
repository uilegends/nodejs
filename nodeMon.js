const http = require('http');

http.createServer((req, res) => {
    res.write('Hello Nodemon111');
    res.end();
}).listen(4000);