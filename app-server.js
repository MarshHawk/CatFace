'use strict';

var express = require('express');

var app = express();

var connections = [];
var title = 'CatBib Workflow';

app.use(express.static('./public'));
//app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3432);
//app.listen(3432);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

	socket.once('disconnect', function() {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining.", connections.length);
	});

	socket.emit('welcome', {
		title:title
	});

	connections.push(socket);
    console.log("Connected: %s", connections.length);
});

console.log("Server is running")
