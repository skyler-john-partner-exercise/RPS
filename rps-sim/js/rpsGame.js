//TODO: a game has players, rps matches, rules/options, handles game logic
// build to handle one-on-one, tournament, alternate rules (i.e. extreme RPS)
class rpsGame {

    constructor(...items) {
        this.participants = [];
        this.ruleSets = new rpsRuleSets();
    }

    //contains which participants and rules
    matchSetup(...items) {

    }

    addRuleSet(...rules) {
        this.ruleSets.addRules(new rpsRules(...rules));
    }

    addPlayer(id) {
        this.participants.push(new rpsPlayer(id));
    }

    addPlayers(numOfPlayers){
        for (let i = 1; i <= numOfPlayers; i++){
            this.addPlayer("p" + (i + this.participants.length + 1));
        }
    }

    addBot(id) {
        this.participants.push(new rpsBot(id));
    }

    addBots(numOfBots){
        for (let i = 1; i <= numOfBots; i++){
            this.addBot("b" + (i + this.participants.length + 1));
        }
    }

    addParticipant(id, isBot = false) {
        if (isBot) {
            this.addBot(id);
        } else {
            this.addPlayer(id);
        }
    }
}