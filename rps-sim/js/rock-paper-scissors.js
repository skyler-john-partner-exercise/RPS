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
game.addPlayers(4);
game.newMatch("p1", "p2");
game.newMatch("p3", "p4");
game.runMatches();
console.log(game);