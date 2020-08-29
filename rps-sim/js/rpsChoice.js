class rpsChoice {

    constructor(id = "choice", ...conditions) {
        this.id = id;
        this.initializeConditions(conditions);
    }

    initializeConditions(conditions) {
        this.conditions = conditions;
        this.winConditions = [];
        this.lossConditions = [];
        this.drawConditions = [];

        for (let condition of this.conditions) {
            let symbol = condition.substring(0, 1);

            let destination = function(choice) {
                switch (symbol) {
                    case ">":
                        return choice.winConditions;
                    case "<":
                        return choice.lossConditions;
                    case "=":
                        return choice.drawConditions;
                    default:
                        console.log(symbol + "is an invalid condition in parseConditions()");
                }
            }(this);

            destination.push(condition.substring(1));
        }
    }

    winsAgainst(choice) {
        return (this.winConditions.indexOf(choice.id) !== -1);
    }

    losesAgainst(choice) {
        return (this.lossConditions.indexOf(choice.id) !== -1);
    }

    drawsAgainst(choice) {
        return (this.drawConditions.indexOf(choice.id) !== -1);
    }

    //TODO: re-evaluate the need for the functions below
    //addWin(...items) {
    //     let condition = "win";
    //     this.addCondition(condition, items);
    // }
    //
    // addLoss(...items) {
    //     let condition = "loss";
    //     this.addCondition(condition, items);
    // }
    //
    // addDraw(...items) {
    //     let condition = "draw";
    //     this.addCondition(condition, items);
    // }
    //
    // addCondition(condition, ...items) {
    //     let destination;
    //
    //     switch (condition.toLowerCase()) {
    //         case "win":
    //             destination = this.winConditions;
    //             break;
    //         case "loss":
    //             destination = this.lossConditions;
    //             break;
    //         case "draw":
    //             destination = this.drawConditions;
    //             break;
    //         default:
    //             console.log("You done f'ed up A-Aron");
    //     }
    //     for (let item of items) {
    //         destination.push(item);
    //     }
    // }


    //TODO: re-evaluate whether or not this code is necessary
    //accepts exactly three array arguments, each array containing the id or other choices it wins/loses/draws to
    // addConditions(win, loss, draw) {
    //     this.addWin(win);
    //     this.addLoss(loss);
    //     this.addDraw(draw);
    // }

    // static win(...conditions) {
    //     return conditions;
    // }
    //
    // static loss(...conditions) {
    //     return conditions;
    // }
    //
    // static draw(...conditions) {
    //     return conditions;
    // }
}