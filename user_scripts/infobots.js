let infobot_outandinjumps = new Bot("Infobot")
let infobot_gatejumps = new Bot("Infobot 2")
let infobot_gameinfo = new Bot("Game Info")
let infobot_poleclimb = new Bot("Infobot 3")
let infobot_trainingcoursepole = new Bot("Infobot 4")

Game.newBot(infobot_outandinjumps)
Game.newBot(infobot_gatejumps)
Game.newBot(infobot_gameinfo)
Game.newBot(infobot_poleclimb)
Game.newBot(infobot_trainingcoursepole)

let outfit = new Outfit(infobot_outandinjumps)
  .body("#0d9436")
  .torso("#694813")
  .rightLeg("#694813")
  .leftLeg("#694813")

let outfit2 = new Outfit(infobot_gatejumps)
  .body("#0d9436")
  .torso("#694813")
  .rightLeg("#694813")
  .leftLeg("#694813")
  
let outfit3 = new Outfit(infobot_gameinfo)
  .body("#0d9436")
  .torso("#694813")
  .rightLeg("#694813")
  .leftLeg("#694813")

let outfit4 = new Outfit(infobot_poleclimb)
  .body("#0d9436")
  .torso("#694813")
  .rightLeg("#694813")
  .leftLeg("#694813")
  
let outfit5 = new Outfit(infobot_trainingcoursepole)
  .body("#0d9436")
  .torso("#694813")
  .rightLeg("#694813")
  .leftLeg("#694813")


infobot_outandinjumps.setPosition(new Vector3(-48,2,0))
infobot_outandinjumps.lookAtPoint(new Vector3(-44,2,0))

infobot_gatejumps.setPosition(new Vector3(-48,-35,0))
infobot_gatejumps.lookAtPoint(new Vector3(-44,-35,0))

infobot_gameinfo.setPosition(new Vector3(-19,-14,0))
infobot_gameinfo.lookAtPoint(new Vector3(-18,-14,0))

infobot_poleclimb.setPosition(new Vector3(-34,-49,0))
infobot_poleclimb.lookAtPoint(new Vector3(-34,-48,0))

infobot_trainingcoursepole.setPosition(new Vector3(46,-20,0))
infobot_trainingcoursepole.lookAtPoint(new Vector3(45,-20,0))

setInterval(() => {
	infobot_outandinjumps.setSpeech("Name: Out and In Jumps Difficulty: Easy")
	infobot_gatejumps.setSpeech("Name: Gate Jumps Difficutly: Easy")
	infobot_gameinfo.setSpeech("Welcome to Jumper Planet 1.0! Join the 'Insert Games' Clan for updates!")
	infobot_poleclimb.setSpeech("Name: Pole Climb Difficulty: Medium/Hard")
	infobot_trainingcoursepole.setSpeech("Name: Pole Training in the Sewers (not complete) Difficulty: Easy")
},3)