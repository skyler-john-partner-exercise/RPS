"use strict";

//TODO: potentially add a player class;
// add class/functions to handle RPS game logic;
// way down the road: network capability;
// ...
// add more concise way to create a choice with the conditions on instancing
let rock = new rpsChoice("rock");

//TODO: make a rock.addConditions(win, loss, draw) function
rock.addWin("scissors");
rock.addLoss("paper");
rock.addDraw("rock");

let paper = new rpsChoice("paper");
paper.addWin("rock");
paper.addLoss("scissors");
paper.addDraw("paper");

let scissors = new rpsChoice("scissors");
scissors.addWin("paper");
scissors.addLoss("rock");
scissors.addDraw("scissors");

let game = new rpsAndMore(rock,paper,scissors);