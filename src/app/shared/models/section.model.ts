export class Section{
    name: String;
    children?: Section[];
    root?: Boolean;

    constructor(name: String) {
        this.name = name;
        this.children = [];
    }
}
