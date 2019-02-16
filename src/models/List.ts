import { Item } from './Item';

export class List {
    id: number
    title: string
    createdAt: Date
    finishedAt: Date
    finished: boolean
    items: Item[]

    constructor(title: string) {
        this.id = new Date().getTime()
        this.title = title
        this.finished = false
        this.createdAt = new Date()
        this.items = []
    }
}