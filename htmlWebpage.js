const http = require('http');
const page = `<h3>This is Webpage</h3>
<input type="text">
<input type="text">
<input type="text">
<button>Submit</button>`;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page);
    res.end();
}).listen(4000);