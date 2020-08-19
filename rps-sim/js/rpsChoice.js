class rpsChoice {

    constructor(id = "choice", ...conditions) {
        this.id = id;
        this.conditions = conditions;
        this.initializeConditions();
    }

    initializeConditions() {
        this.winConditions = [];
        this.lossConditions = [];
        this.drawConditions = [];

        let destination;

        for (let condition of this.conditions) {
            let symbol = condition[0];

            switch (symbol) {
                case ">":
                    destination = this.winConditions;
                    break;
                case "<":
                    destination = this.lossConditions;
                    break;
                case "=":
                    destination = this.drawConditions;
                    break;
                default:
                    console.log(symbol + "is an invalid condition in parseConditions()");
            }
            destination.push(condition.substring(1));
        }
    }

    addWin(...items) {
        let condition = "win";
        this.addCondition(condition, items);
    }

    addLoss(...items) {
        let condition = "loss";
        this.addCondition(condition, items);
    }

    addDraw(...items) {
        let condition = "draw";
        this.addCondition(condition, items);
    }

    addCondition(condition, ...items) {
        let array;

        switch (condition.toLowerCase()) {
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
        this.addWin(win);
        this.addLoss(loss);
        this.addDraw(draw);
    }

    static win(...conditions) {
        return conditions;
    }

    static loss(...conditions) {
        return conditions;
    }

    static draw(...conditions) {
        return conditions;
    }
}