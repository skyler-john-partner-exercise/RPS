//holds who is playing, and a rule set to play by
class rpsMatch extends rpsContestants {

    constructor(playerObj1, playerObj2, rulesID) {
        super();
        this.addContestants(playerObj1, playerObj2);
        this.rulesID = rulesID;
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