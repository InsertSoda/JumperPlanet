let ownerid = 10583

var secspassed = 0
var secsleft = 31
var mappicknumber = 1


async function loop1(){
	setTimeout(loop2,500)
	if(secsleft == 0){
		console.log("3 secs")
		mappicknumber = Math.floor(Math.random() * 2) + 1
		console.log(mappicknumber)
		world.bricks.forEach(async(brick) => {
			await sleep(500)
			brick.destroy()
		})
		await sleep(500)
		await Game.loadBrk("./maps/" + mappicknumber + ".brk")
		if(mappicknumber == 2){
			Game.centerPrintAll("Map: Quick Maze by InsertSoda",3)
			console.log("timeset")
			secsleft = 31
		}
		if(mappicknumber == 1){
			Game.centerPrintAll("Map: Gate Jumps by InsertSoda",3)
			console.log("timeset")
			secsleft = 31
		}
		if(mappicknumber == 0
			Game.centerPrintAll("Map: Template by user",3)
			secsleft = -1
		}
		await sleep(1000)
		respawnAndSetBricks()
	}
	Game.topPrintAll("You have "+ secsleft +" seconds remaining!",2)
	secsleft = secsleft - 1
}

function loop2(){
	setTimeout(loop1,500)
	++secspassed
}

Game.command("skip", (caller,args) => {
	if (caller.userId !== ownerid) return
	return secsleft = 1
})


loop1()

function respawnAndSetBricks(){
	console.log("Respawning Players and tagging bricks...")
		for (let player of Game.players) {
			player.respawn()
			player.setJumpPower(5)
			player.setSpeed(4)
		}
	world.bricks.forEach(async(brick) => {
		await sleep(500)
		if(brick.name == "Lava"){
			brick.touching(debounce(player => {
				player.respawn()
				player.centerPrint("Ouch... You touched Lava!",3)
			}),2000)
		}
		if(brick.name == "Death"){
			brick.touching(debounce(player => {
				player.respawn()
				player.centerPrint("Ouch... You died!",3)
			}),2000)
		}
		if(brick.name == "Win"){
		brick.touching(debounce(player => {
			player.respawn()
			player.centerPrint("You completed the obby! +10 Points",3)
			Game.messageAll(player.username + " has completed the obby!",3)
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score
			++player.score // 10 points
			player.setScore(player.score)
			player.bottomPrint("You currently have "+ player.score +" Points!",300)
		}),5000)}
	})
}