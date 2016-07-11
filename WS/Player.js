/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(u, n, s) {
	var uid = u,
		status = s,
		sockid,
		socket,
		mode,
		name = n,
		opp;

	// Define which variables and methods can be accessed
	return {
		uid: uid,
		status: status,
		sockid: sockid,
		socket: socket,
		mode: mode,
		name: name,
		opp: opp
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Player = Player;