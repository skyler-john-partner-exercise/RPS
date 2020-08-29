
//handles game logic, determining winner
class rpsRules {

    constructor() {
        this.options = [];
    }

    addOptions(...items){
        this.options = items;
    }

    addOption() {

    }

    static whoWins(choiceOne, choiceTwo) {
        return this.verifiedWinner(choiceOne, choiceTwo);
    }

    static isADraw(choiceOne, choiceTwo) {
        return (choiceOne.drawsAgainst(choiceTwo) && choiceTwo.drawsAgainst(choiceOne))
    }

    // returns null intentionally on draw
    static verifiedWinner(choiceOne, choiceTwo) {
        if (choiceOne.winsAgainst(choiceTwo) && choiceTwo.losesAgainst(choiceOne)) {
            return choiceOne;
        } else if (choiceTwo.winsAgainst(choiceOne) && choiceOne.losesAgainst(choiceTwo)) {
            return choiceTwo;
        } else if (this.isADraw(choiceOne,choiceTwo)) {
            return null;
        } else {
            console.log("No verified winner or draw could be determined");
        }
    }

    randomChoice() {
        let randomNumber = Math.floor(Math.random() * this.options.length)
        return this.options[randomNumber];
    }
}