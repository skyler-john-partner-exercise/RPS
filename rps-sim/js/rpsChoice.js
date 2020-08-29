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
    
}