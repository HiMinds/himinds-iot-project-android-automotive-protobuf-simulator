const net = require('net');
const fs = require('fs')
const protobuf = require('protocol-buffers')

const messages = protobuf(fs.readFileSync('../proto/obd2.proto'))

const port = 9001;
const ip = '127.0.0.1';


const server = net.createServer(function(socket) {

	socket.on('data', function(data){
      console.log(data);
      let decoded = messages.Engine.decode(data);
      console.log('decoded',decoded)
		//textChunk = decoded.toString('utf8');
		//socket.write(textChunk);
   });

   socket.on('error', function(err) {
      //console.log(err)
   })

});
server.listen(port, ip);
console.log(`Server started on ${ip}:${port}`);