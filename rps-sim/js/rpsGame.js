//TODO: a game has players, rps matches, rules/options, handles game logic
// build to handle one-on-one, tournament, alternate rules (i.e. extreme RPS)
class rpsGame {

    constructor() {
        this.participants = {};
        this.ruleSets = new rpsRuleSets();
        this.matchesToRun = [];
    }

    //contains participants and rules
    newMatch(id1, id2, ruleID="standard") {
        let match = new rpsMatch(this.participants[id1], this.participants[id2], ruleID);
        this.matchesToRun.push(match);
    }

    //TODO---create logic to evaluate game matches after p1 presses a button
    // NOTE--this only handles single-player
    runMatches() {
        let game = this;
        for (let index in this.matchesToRun) {
            let container = document.createElement("div")
            container.id = "container" + index;
            container.innerText = "match" + (Number(index) + 1).toString();
            let match = this.matchesToRun[index];

            for (let player of Object.keys(match.contestants)) {
                let playerDiv = document.createElement("div");
                playerDiv.innerText = player;
                playerDiv.id = player;

                for (let option of this.optionsIn(match.rulesID)) {
                    let btn = document.createElement("button");
                    btn.textContent = option.id;
                    btn.onclick = function() {
                        console.log(player, option.id);
                        //TODO: function to simulate the rest
                        game.restOfRound(option);
                    }
                    if (match.contestants[player].isBot === true) {
                        btn.disabled = true;
                    }
                    playerDiv.appendChild(btn);
                }
                container.appendChild(playerDiv);
            }
            document.body.appendChild(container);
        }
    }

    restOfRound(option) {
        let otherChoice = this.randomChoice();
        console.log("p1", option.id, "p2", otherChoice.id);
        console.log(rpsRules.verifiedWinner(option, otherChoice));
    }

    optionsIn(rulesID) {
        return this.ruleSets.ruleSets[rulesID].options;
    }

    addRuleSet(id, ...rules) {
        this.ruleSets.addRules(new rpsRules(id, ...rules));
    }

    addPlayer(id) {
        this.participants[id] = new rpsPlayer(id);
    }

    addPlayers(numOfPlayers){
        for (let i = 1; i <= numOfPlayers; i++){
            this.addPlayer("p" + i);
        }
    }

    addBot(id) {
        this.participants[id] = new rpsBot(id);
    }

    addBots(numOfBots){
        for (let i = 1; i <= numOfBots; i++){
            this.addBot("b" + i);
        }
    }

    addParticipant(id, isBot = false) {
        if (isBot) {
            this.addBot(id);
        } else {
            this.addPlayer(id);
        }
    }

    randomChoice(rulesID = "standard") {
        return this.ruleSets.ruleSets[rulesID].randomChoice();
    }
}