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

// let game = new rpsGame(rock, paper, scissors);
// game.addPlayers(2);
// // game.addPlayers(5);
let game = new rpsGame();
game.addRuleSet(rock, paper, scissors)
console.log(game);