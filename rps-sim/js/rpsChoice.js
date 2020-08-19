class rpsChoice {

    constructor(id = "choice") {
        this.id = id;
        this.win = [];
        this.loss = [];
        this.draw = [];
    }

    addWin(...items) {
        let condition = "win";
        this.addCondition(condition,items);
    }

    addLoss(...items) {
        let condition = "loss";
        this.addCondition(condition,items);
    }

    addDraw(...items) {
        let condition = "draw";
        this.addCondition(condition,items);
    }

    addCondition(condition, ...items) {
        let array;

        switch (condition) {
            case "win":
                array = this.win;
                break;
            case "loss":
                array = this.loss;
                break;
            case "draw":
                array = this.draw;
                break;
            default:
                console.log("You done f'ed up A-Aron");
        }
        for (let item of items) {
            array.push(item);
        }
    }

    //TODO: create function
    // accepts exactly three array arguments, each array containing the id or other choices it wins/loses/draws to
    addConditions(win, loss, draw) {

    }
}