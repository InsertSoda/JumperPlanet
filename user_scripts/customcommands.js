
let ownerid = 10583

Game.command("centerPrintAll", (caller,args) => {
	if (caller.userId !== ownerid) return
	return Game.centerPrintAll(args,5)
});

Game.command("topPrintAll", (caller,args) => {
	if (caller.userId !== ownerid) return
	return Game.topPrintAll(args,5)
});

Game.command("bottomPrintAll", (caller,args) => {
	if (caller.userId !== ownerid) return
	return Game.bottomPrintAll(args,5)
});

Game.command("respawn", (caller) => {
	caller.respawn()
	return caller.topPrint("You have been respawned!",3)
});

Game.command("cmds", (caller) => {
	return caller.prompt("/cmds (Displays all core chat commands.) /w 'player' message (Whispers to a player privately. Quotes are required for usernames with spaces.) /block player (Blocks/unblocks a player's messages.) /respawn (Respawns your character.)")
});

Game.command("skydive", (caller) => {
	if (caller.userId !== 10583) return
		caller.topPrint("Skydive command activated!",3)
		return caller.setPosition([0,0,50])
});

Game.command("shutdown", (caller,args) => {
	if (caller.userId !== 10583) return
	Game.centerPrintAll("Server is restarting soon!",10)
	shutdownwait = setTimeout(10000)
	for (let player of Game.players) {
		player.prompt("Server is restarting! Please rejoin if you want to.")
	}
	//return Game.shutdown();
});

Game.command("fakemessage", (caller,args) => {
	if (caller.userId !== 10583) return
	return Game.messageAll(args)
});

Game.command("fmsg", (caller,args) => {
	if (caller.userId !== 10583) return
	return Game.messageAll(args)
});

Game.command("fakemessage", (caller,args) => {
	if (caller.userId !== 10583) return
	return Game.messageAll(args)
});

Game.command("clearchat", (caller) => {
	if (caller.userId !== 10583) return
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	Game.messageAll(" ")
	return caller.message("[Local] The chat has been cleared.")
});

Game.command("lolychat", (caller) => {
	if (caller.userId !== 10583) return
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	Game.messageAll("-- LOL --")
	return caller.message("[Local] The chat has been lol-ified.")
});