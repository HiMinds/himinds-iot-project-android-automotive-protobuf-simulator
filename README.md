# himinds-iot-project-android-automotive-protobuf-simulator

Client/Server protobuf example for OBD-II data.

### protobuf-schema object
In folder /proto you will find the  protobuf-schema object with a few OBD-II values.

```
message Engine {
  required int32 engine_rpm  = 1;
  required float vehicle_speed_sensor = 2;
  required float intake_air_temperature = 3;
  required float engine_oil_temperature = 4;
}

```

## Installation

```
cd client
npm install
```

```
cd server
npm install
```

## Running the applications

### Start the server 

```
~/github-hm/himinds-iot-project-android-automotive-protobuf-simulator/server 

$ node protobuf-server.js 
server started on 127.0.0.1:9001
<Buffer 08 2a 15 00 00 70 42 1d 00 00 b0 41 25 66 66 a1 42>
decoded { engine_rpm: 42,
  vehicle_speed_sensor: 60,
  intake_air_temperature: 22,
  engine_oil_temperature: 80.69999694824219 }
```

### Run the client

```
~/himinds-iot-project-android-automotive-protobuf-simulator/client 
$ node protobuf-client.js 
Connected
Connection closed

```



