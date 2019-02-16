export class Item {
    description: string
    finished: boolean

    constructor(description: string) {
        this.description = description
        this.finished = false
    }
}