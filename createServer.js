const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello Server Created!!');
    res.end();
}).listen(5000);