const fs = require('fs');
const dgram = require('dgram');

// Process Variables
const PORT = process.env.PORT || 6015;
const HOST = process.env.PORT || '54.91.11.111'; // Replace with your server IP

// Data Chunk
const message = fs.readFileSync('test');

// Data Chunk Length
console.log(message.length);

// UDP Socket Client
const client = dgram.createSocket('udp4');

for (let i = 1; i <= 32; i++) {
  client.send(message, PORT, HOST, function(err, bytes) {
   if (err) throw err;
   console.log('UDP message sent to ' + HOST +':'+ PORT);
   console.log(new Date().getTime());
  });
}
