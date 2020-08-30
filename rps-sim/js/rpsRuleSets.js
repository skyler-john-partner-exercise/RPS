class rpsRuleSets {
    constructor() {
        this.ruleSets = {};
    }

    //takes in an rpsRules object
    addRules(rules) {
        this.ruleSets[rules.id] = rules;
    }
}