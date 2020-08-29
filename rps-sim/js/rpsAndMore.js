// TODO: add a newGame and gameSetup function
class rpsAndMore {

    options = [];

    //TODO: add an array of player objects perhaps

    constructor(...items) {
        this.addOptions(...items); //seems to be allowed to continue passing '...items'
    }

    addOptions(...items){
        this.options = items;
    }

    //TODO: add on-click ability
    addPlayer(id){
        let element = document.createElement("div");
        element.id = id;
        element.innerHTML = id;
        for (let option of this.options){
            let btn = document.createElement("button");
            btn.textContent = option.id;
            btn.onclick = function() {
                let choice = this.textContent;
                let div = document.getElementById(id);
                let buttons = div.getElementsByTagName("button");
                for (let btn of buttons) {
                    if (btn.textContent !== choice) {
                        btn.style.display = "none";
                    } else {
                        btn.disabled = true;
                    }
                }

                console.log({
                    player: id,
                    choice: choice,
                });
                // return {
                //     id: id,
                //     text: choice,
                // }
            };

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
        let outcome = rpsAndMore.verifiedWinner(choiceOne, choiceTwo);
        let results = { playerOneChoice: choiceOne.id };

        if (outcome === choiceOne) {
            results.winningPlayer = 1;
        } else if (outcome === choiceTwo) {
            results.winningPlayer = 2;
        } else {
            results.winningPlayer = 0;
        }

        return results;
    }

    simulateRounds(numberOfRounds) {
        let stats = {
            rockWins: 0,
            rockLosses: 0,
            rockDraws: 0,
            paperWins: 0,
            paperLosses: 0,
            paperDraws: 0,
            scissorsWins: 0,
            scissorsLosses: 0,
            scissorsDraws: 0,
            totalWins: 0,
            totalLosses: 0,
            totalDraws: 0,
        };

        for (let i = 1; i <= numberOfRounds; i++) {
            let result = this.simulateRound();
            let winningPlayer = result.winningPlayer;

            if (winningPlayer === 1) {
                stats[result.playerOneChoice + "Wins"]++;
                stats.totalWins++;
            } else if (winningPlayer === 2) {
                stats[result.playerOneChoice + "Losses"]++;
                stats.totalLosses++;
            } else {
                stats[result.playerOneChoice + "Draws"]++;
                stats.totalDraws++;
            }
        }
        return stats;
    }
}