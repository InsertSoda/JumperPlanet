Game.on("playerJoin", (player) => {
   player.prompt("Welcome To Jumper Planet! Use the /respawn command to go back to spawn! This game is not complete and the floaty jumps that people sometimes have is not fixable by me.")
   player.topPrint("Welcome to Jumper Planet 1.0!",3)
})

const water = world.bricks.find(brick => brick.name === "Water")

water.touching((player) => {
	player.respawn()
	player.bottomPrint("Oops! You fell into the water",3)
})