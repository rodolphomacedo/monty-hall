export default class Door {
    #numberDoor
    #selected
    #hasGift
    #open

    constructor(numberDoor,
                hasGift=false,
                selected=false,
                open=false) {
        this.#numberDoor = numberDoor
        this.#hasGift = hasGift
        this.#selected = selected
        this.#open = open
    }

    get numberDoor(){
        return this.#numberDoor
    }

    get selected(){
        return this.#selected
    }

    get hasGift(){
        return this.#hasGift
    }

    get open(){
        return this.#open
    }

    removeSelected(){
        const selected = false
        return new Door(this.numberDoor, this.hasGift, selected, this.open)
    }

    toogleSelection(){
        const selected = !this.selected
        return new Door(this.numberDoor, this.hasGift, selected, this.open)
    }

    openDoor(){
        const open = true
        return new Door(this.numberDoor, this.hasGift, this.selected, open)
    }
}