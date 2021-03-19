const http = require('http');
const data = { name: 'Ghanshyam', email: 'uilegends@gmail.com' };
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);