const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection',  function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        server.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        })
    })
})