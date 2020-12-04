Game.command("shop", (caller) => {
	caller.centerPrint("Look in the chat for the shop.",5)
	caller.message("-- Welcome to the Shop--")
	caller.message("- Buy with /buy (ID)")
	caller.message("[ID:1] 20 Points: Jump Boost")
	caller.message("Jump Boost lasts for one round.")
	caller.message("Allows you to go out of bounds aswell.")
	caller.message("[ID:2] 20 Points: Speed")
	caller.message("Speed lasts for one round.")
	caller.message("[ID:3] 40 Points: Speed+")
	caller.message("Speed+ lasts for one round.")
})

Game.command("buy", (caller,args) => {
	if(args == "1"){
		checkAndRemove(caller,20)
		if(canbuy == true){
		caller.setJumpPower(8)
		caller.centerPrint("You succesfully bought Jump Boost for 20 Points!",5)
		reshowPoints(caller)
	}}
	if(args == "2"){
		checkAndRemove(caller,20)
		if(canbuy == true){
		caller.setSpeed(6)
		caller.centerPrint("You succesfully bought Speed for 20 Points!",5)
		reshowPoints(caller)
	}}
	if(args == "3"){
		checkAndRemove(caller,40)
		if(canbuy == true){
		caller.setSpeed(8)
		caller.centerPrint("You succesfully bought Speed+ for 40 Points!",5)
		reshowPoints(caller)
		}
	}
})

function checkAndRemove(player,amount){
	if(player.score > amount){
		player.score = player.score - amount
		canbuy = true
	}
	if(player.score < amount){
		player.centerPrint("You don't have enough Points to buy this!",5)
		player.message("You don't have enough Points to buy this!")
		canbuy = false
		reshowPoints(player)
	}
}

function reshowPoints(player){
	player.setScore(player.score)
	player.bottomPrint("You currently have "+ player.score +" Points!",300)
}