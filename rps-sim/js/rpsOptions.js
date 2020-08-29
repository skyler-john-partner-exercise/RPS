
//an array of rpsChoices
class rpsOptions {

    options = [];

    constructor(...items) {
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

}