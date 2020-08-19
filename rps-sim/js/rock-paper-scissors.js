"use strict";

class choice {

    constructor(id = "choice") {
        this.id = id;
        this.win = [];
        this.loss = [];
        this.draw = [];
    }

    addWin(...items) {
        let condition = "win";
        this.addCondition(condition,items);
    }

    addLoss(...items) {
        let condition = "loss";
        this.addCondition(condition,items);
    }

    addDraw(...items) {
        let condition = "draw";
        this.addCondition(condition,items);
    }

    addCondition(condition, ...items) {
        let array;

        switch (condition) {
            case "win":
                array = this.win;
                break;
            case "loss":
                array = this.loss;
                break;
            case "draw":
                array = this.draw;
                break;
            default:
                console.log("You done f'ed up A-Aron");
        }
        for (let item of items) {
            array.push(item);
        }
    }

    //TODO: create function
    // accepts exactly three array arguments, each array containing the id or other choices it wins/loses/draws to
    addConditions(win, loss, draw) {

    }

}


// TODO: add a newGame and gameSetup function
class rpsAndMore {

    options = [];

    constructor(...items) {
        this.addOptions(...items); //seems to be allowed to continue passing '...items'
    }

    addOptions(...items){
        this.options = items;
    }

    addPlayer(id){
        let element = document.createElement("div");
        element.id = id;
        element.innerHTML = id;
        for (let option of this.options){
            let btn = document.createElement("button");
            btn.textContent = option.id;
            element.appendChild(btn);
        }
        document.body.appendChild(element);
    }
    addPlayers(numOfPlayers){
        for (let i = 1; i <= numOfPlayers; i++){
            this.addPlayer("p" + i);
        }
    }
}

//TODO: potentially add a player class;
// add class/functions to handle RPS game logic;
// way down the road: network capability;
// ...
// add more concise way to create a choice with the conditions on instancing
let rock = new choice("rock");

//TODO: make a rock.addConditions(win, loss, draw) function
rock.addWin("scissors");
rock.addLoss("paper");
rock.addDraw("rock");

let paper = new choice("paper");
paper.addWin("rock");
paper.addLoss("scissors");
paper.addDraw("paper");

let scissors = new choice("scissors");
scissors.addWin("paper");
scissors.addLoss("rock");
scissors.addDraw("scissors");

let game = new rpsAndMore(rock,paper,scissors);