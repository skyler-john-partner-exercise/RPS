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

    randomChoice() {
        let randomNumber = Math.floor(Math.random() * this.options.length)
        return this.options[randomNumber];
    }

    static whoWins(choiceOne, choiceTwo) {
        if (choiceOne.winsAgainst(choiceTwo)) {
            if (choiceTwo.losesAgainst(choiceOne)) {
                return choiceOne;
            } else {
                console.log("There is a logic flaw in determining who won via rpsAndMore.whoWins()");
            }
        } else if (choiceOne.losesAgainst(choiceTwo)) {
            if (choiceTwo.winsAgainst(choiceOne)) {
                return choiceTwo;
            } else {
                console.log("There is a logic flaw in determining who won via rpsAndMore.whoWins()");
            }
        } else {
            if (this.isADraw(choiceOne, choiceTwo)) {
                return null;
            } else {
                console.log("There is a logic flaw in determining who won via rpsAndMore.whoWins()");
            }
        }
    }

    static isADraw(choiceOne, choiceTwo) {
        return (choiceOne.drawsAgainst(choiceTwo) && choiceTwo.drawsAgainst(choiceOne))
    }
}