"use strict";

class choice {
    win = [];
    loss = [];
    draw = [];

    constructor(id = "choice" ) {
        this.id = id;
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

    addCondition(...items) {
        let array = [];
        let condition = items[0];
        let newItems = items[1];
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
        for (let item of newItems) {
            array.push(item);
        }
    }
}
class rpsAndMore {
    options = [];
    players = 2;
    constructor(...items) {
        this.addOptions(items);
    }
    addOptions(...items){
        this.options = items[0];
    }
    addPlayer(id){
        let element = document.createElement("div");
        element.id = id;
        element.innerHTML = id;
        for (let option of this.options){
            let btn = document.createElement("button");
            console.log(option);
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
let rock = new choice("rock");
let paper = new choice("paper");
let scissors = new choice("scissors");
let game = new rpsAndMore(rock,paper,scissors);

