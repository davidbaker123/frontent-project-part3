import { Language } from "./language";

export class Category {
    id : number;
    name : string;
    origin : Language;
    target : Language;
    lastUpdateDate = new Date();
    words = new Map<string, string>();

    constructor(id: number,
        name : string,
        origin : Language,
        target : Language) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.target = target;
    }
}