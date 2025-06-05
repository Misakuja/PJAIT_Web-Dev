const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });
const clients = new Map();

server.on('connection', (ws) => {
    ws.on('error', console.error);

    ws.on('message', (data) => {
        const msg = data.toString();

        if (!clients.has(ws)) {
            clients.set(ws, msg); // Register user
            logConnectedClients();
            broadcastUserList();
            return;
        }

        const sender = clients.get(ws);

        if (msg.startsWith('@')) {
            const separator = msg.indexOf(':');
            if (separator > 1) {
                const targetUser = msg.slice(1, separator).trim();
                const privateMsg = msg.slice(separator + 1).trim();

                for (const [client, nick] of clients.entries()) {
                    if (nick === targetUser && client.readyState === WebSocket.OPEN) {
                        client.send(`[Private] ${sender}: ${privateMsg}`);
                        return;
                    }
                }
            }
        } else {
            for (const client of server.clients) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(`${sender}: ${msg}`);
                }
            }
        }
    });

    ws.on('close', () => {
        if (clients.has(ws)) {
            clients.delete(ws);
            logConnectedClients();
            broadcastUserList();
        }
    });
});

function logConnectedClients() {
    const nicks = [...clients.values()];
    console.log('Connected clients:', nicks.length ? nicks.join(', ') : '(none)');
}

function broadcastUserList() {
    const users = [...clients.values()];
    const payload = JSON.stringify({ type: 'userList', users });

    for (const client of clients.keys()) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    }
}
