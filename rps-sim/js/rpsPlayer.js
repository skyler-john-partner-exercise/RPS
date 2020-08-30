class rpsPlayer {

    constructor(id) {
        this.id = id;
    }

}

class rpsBot extends rpsPlayer {

    constructor(id) {
        super(id);
        this.isBot = true;
    }
}