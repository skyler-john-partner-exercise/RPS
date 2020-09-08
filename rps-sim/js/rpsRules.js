
//handles game logic, determining winner
class rpsRules extends rpsOptions {

    constructor(id, ...items) {
        super(...items);
        this.id = id;
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
            return true;
        } else if (choiceTwo.winsAgainst(choiceOne) && choiceOne.losesAgainst(choiceTwo)) {
            return false;
        } else if (this.isADraw(choiceOne,choiceTwo)) {
            return null;
        } else {
            console.log("No verified winner or draw could be determined");
        }
    }

}