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

    //TODO: functions only account for a two-player game currently; need to make dynamic
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

    simulateRound() {
        let choiceOne = this.randomChoice();
        let choiceTwo = this.randomChoice();
        let result = rpsAndMore.verifiedWinner(choiceOne, choiceTwo);

        if (result === choiceOne) {
            return 1;
        } else if (result === choiceTwo) {
            return 2;
        } else {
            return 0;
        }
    }

    simulateRounds(numberOfRounds) {
        let stats = {
            wins: 0,
            losses: 0,
            draws: 0,
        };

        for (let i = 1; i <= numberOfRounds; i++) {
            let result = this.simulateRound();

            if (result === 1) {
                stats.wins++;
            } else if (result === 2) {
                stats.losses++;
            } else {
                stats.draws++;
            }
        }
        return stats;
    }
}