var http = require('http');
const PORT = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hi demo!');
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
