const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

const clients = new Map();


server.on('connection',  function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        if (!clients.has(ws)) {
            clients.set(ws, data.toString());

            const nicks = [...clients.values()];
            console.log('Connected clients:', nicks.length ? nicks.join(', ') : '(none)');
        } else {

            const nick = clients.get(ws);
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(`${nick}: ${data.toString()}`);
                }
            })
        }
    })
})