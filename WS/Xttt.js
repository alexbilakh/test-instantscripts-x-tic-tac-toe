// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
io = require('socket.io')(server);

util = require("util");							// Utility resources (logging, object inspection, etc)

/**************************************************
** GAME VARIABLES
**************************************************/
Player = require("./Player").Player;			// Player class
players = [];									// Array of connected players
players_avail = [];


var port = process.env.PORT || 3001;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

require('./XtttGame.js');

io.on('connection', set_game_sock_handlers);
