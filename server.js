const htttp = require('http');
const port = 8000;
const fs = require('fs');


function requestHandler(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});

    fs.readFile('./index.html', function(err, data) {
        if(err) {
            console.log("Error", err);
            return res.end("<h1>Error!</h1>");
        }

        res.end(data);
    });  
}

const server = htttp.createServer(requestHandler);

server.listen(port, function(err) {
    if(err) {
        console.log("Error!");
        return;
    }

    console.log('Server is running on port: ', port);
})