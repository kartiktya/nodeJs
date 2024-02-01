const http = require('http');

const route = require('./routes');

console.log(route.someText);
const server = http.createServer(route.handler);   //this route having requestHandler fn will be executed for every incoming requests


server.listen(3000);