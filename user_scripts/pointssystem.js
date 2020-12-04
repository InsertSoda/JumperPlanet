const outandinjumpswin = world.bricks.find(brick => brick.name === "Win1")
const gatejumps = world.bricks.find(brick => brick.name === "Win2")
const poleclimb = world.bricks.find(brick => brick.name === "Win3")
const poletrainingsewers = world.bricks.find(brick => brick.name === "Win4")

outandinjumpswin.touching((player) => {
	player.respawn()
	player.setScore(++player.score)
	player.centerPrint("You completed Out and In Jumps! +1 Point",3)
	player.bottomPrint("Points: " + player.score,6000) 
})

gatejumps.touching((player) => {
	player.respawn()
	player.setScore(++player.score)
	player.centerPrint("You completed Gate Jumps! +1 Point",3)
	player.bottomPrint("Points: " + player.score,6000)
})

poleclimb.touching((player) => {
	player.respawn()
	player.setScore(++player.score)
	player.setScore(++player.score)
	player.setScore(++player.score)
	player.centerPrint("You completed Pole Climb! +3 Points",3)
	player.bottomPrint("Points: " + player.score,6000)
})

poletrainingsewers.touching((player) => {
	player.respawn()
	player.setScore(++player.score)
	player.centerPrint("You completed Pole Training in the Sewers! +1 Point",3)
	player.bottomPrint("Points: " + player.score,6000)
})