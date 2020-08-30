
//an array of rpsChoices
class rpsOptions {

    constructor(...items) {
        this.options = [];
        this.addChoices(...items);
    }

    get length() {
        return this.options.length;
    }

    addChoices(...items){
        for (let item of items) {
            if (Array.isArray(item)) {
                this.options = this.options.concat(item)
            } else {
                this.options.push(item);
            }
        }
    }

    randomChoice() {
        let randomNumber = Math.floor(Math.random() * this.options.length)
        return this.options[randomNumber];
    }
}