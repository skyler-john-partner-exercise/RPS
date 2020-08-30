//holds who is playing, and a rule set to play by
class rpsMatch extends rpsContestants {

    constructor(playerObj1, playerObj2, rulesObj) {
        super();
        this.addContestants(playerObj1, playerObj2);
        this.rules = rulesObj;
    }

    addRules() {

    }
}

class rpsMatches {
    constructor() {
        this.matches = [];
    }
}

class rpsMatchLog {



}