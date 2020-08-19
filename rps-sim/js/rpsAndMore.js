// TODO: add a newGame and gameSetup function
class rpsAndMore {

    options = [];

    constructor(...items) {
        this.addOptions(...items); //seems to be allowed to continue passing '...items'
    }

    addOptions(...items){
        this.options = items;
    }

    addPlayer(id){
        let element = document.createElement("div");
        element.id = id;
        element.innerHTML = id;
        for (let option of this.options){
            let btn = document.createElement("button");
            btn.textContent = option.id;
            element.appendChild(btn);
        }
        document.body.appendChild(element);
    }
    addPlayers(numOfPlayers){
        for (let i = 1; i <= numOfPlayers; i++){
            this.addPlayer("p" + i);
        }
    }
}