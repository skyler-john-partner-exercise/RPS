"use strict";

//TODO: potentially add a player class;
// add class/functions to handle RPS game logic;
// way down the road: network capability;

let rock = new rpsChoice("rock",
    ">scissors", "<paper", "=rock",
);

let paper = new rpsChoice("paper",
    ">rock", "<scissors", "=paper",
);

let scissors = new rpsChoice("scissors",
    ">paper", "<rock", "=scissors",
);

let game = new rpsGame();
game.addRuleSet("standard", rock, paper, scissors)
game.addPlayer("p1");
game.addBots(3);
game.newMatch("p1", "b1");
game.newMatch("b2", "b3");
game.runMatches();
console.log(game);