const folderPath = '../../files';


let http = require('http');
const fs = require("fs");

let server = http.createServer(function (request, response) {
    let fileName = request.url;
    let body = '';

    if (request.url === '/favicon.ico') {
        response.writeHead(204);
        response.end();
        return;
    }

    if (request.method === 'GET') {
        fs.readFile(folderPath + fileName, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(`<html><body><p>${data}</p></body></html>`);
            response.end();
        })

    } else if (request.method === 'POST') {
        request.on('data', chunk => {
            body += chunk;
        });

        request.on('end', () => {
            fs.appendFile(folderPath + fileName, body, function (err) {
                if (err) {
                    console.error('Error reading file:', err);
                }
                console.log('File updated!');
            });
        });
        response.end();

    } else if (request.method === 'DELETE') {
        fs.unlink(folderPath + fileName, function (err) {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('File deleted!');
        });
        response.end();
    }

})

server.listen(3000);

console.log('Node.js web server at port 3000 is running.');
