"use strict";

//TODO: potentially add a player class;
// add class/functions to handle RPS game logic;
// way down the road: network capability;
// ...
// add more concise way to create a choice with the conditions on instancing
let rock = new rpsChoice("rock",
    ">scissors",
    "<paper",
    "=rock",
);

let paper = new rpsChoice("paper",
    ">rock",
    "<scissors",
    "=paper",
);

let scissors = new rpsChoice("rock",
    ">paper",
    "<rock",
    "=scissors",
);

let game = new rpsAndMore(rock, paper, scissors);