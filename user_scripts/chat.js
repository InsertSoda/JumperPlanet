Game.on("chat", (player, message) => {
	if (player.userId == 10583) return Game.messageAll("[#ff0000][Owner] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 100277) return Game.messageAll("[#ff0000][Owner] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 118794) return Game.messageAll("[#000000][Dev] [#00ff22]" + player.username + ": " + message)
	if (player.admin) return Game.messageAll("[#ffde0a][BH Admin] " + player.username + ": " + message)
	return Game.messageAll("[Player] " + player.username + ": " + message)
})