const dgram = require('dgram');

// Process Variables
const PORT = process.env.PORT || 6015;
const HOST = process.env.PORT || '0.0.0.0';

// UDP Socket Server
const server = dgram.createSocket('udp4');

// UDP server listen event
server.on('listening', function() {
 const address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

// UDP server message receive event
server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
 console.log(new Date().getTime());
});

// Start UDP Server
server.bind(PORT, HOST);
