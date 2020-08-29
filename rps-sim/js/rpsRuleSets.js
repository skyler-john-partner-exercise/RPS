class rpsRuleSets {
    constructor(...ruleSets) {
        this.ruleSets = ruleSets;
    }

    //takes in an rpsRules object
    addRules(rules) {
        this.ruleSets.push(rules);
    }
}