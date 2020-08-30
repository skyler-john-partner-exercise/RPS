
//array of players, cpu
class rpsContestants {
    constructor() {
        this.contestants = {};
    }

    addContestants(...playerObjects) {
        for (let playerObject of playerObjects) {
            this.addContestant(playerObject);
        }

    }

    addContestant(playerObject) {
        this.contestants[playerObject.id] = playerObject;
    }
}