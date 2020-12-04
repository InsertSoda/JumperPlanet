Game.on("chat", (player, message) => {
	if (player.userId == 10583) return Game.messageAll("[#ff0000][Owner] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 100277) return Game.messageAll("[#ff0000][Owner] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 218504) return Game.messageAll("[[#ff0000]B[#ffff00]a[#00ff0d]n[#ffffff]a[#ff00ff]n[#ff0000]a[#ffffff]]" + player.username + ": " + message)
	if (player.userId == 33655) return Game.messageAll("[#0000ff][social anxiety] [#ffffff]" + player.username + ": " + message) // graybear asked me to do this lol
	if (player.userId == 240140) return Game.messageAll("[#fff200][banana bot] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 124241) return Game.messageAll("[#000000][yeet alt] [#ffffff]" + player.username + ": " + message)
	if (player.userId == 118794) return Game.messageAll("[#000000][Dev] [#00ff22]" + player.username + ": " + message)
	if (player.admin) return Game.messageAll("[#ffde0a][BH Admin] " + player.username + ": " + message)
	return Game.messageAll("[Player] " + player.username + ": " + message)
})