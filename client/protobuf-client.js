const net = require('net');
const fs = require('fs')
const protobuf = require('protocol-buffers')

// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
const messages = protobuf(fs.readFileSync('../proto/obd2.proto'))


const port = 9001;
const ip = '127.0.0.1';

const client = new net.Socket();

const engineData = ({
   engine_rpm: 42,
   vehicle_speed_sensor: 60.0,
   intake_air_temperature: 22.0,
   engine_oil_temperature: 80.7
 });

 var buf = messages.Engine.encode(engineData)

client.connect(port, ip, function() {
	console.log('Connected');
   client.write(buf);
   client.destroy(); 
});

client.on('close', function() {
	console.log('Connection closed');
});