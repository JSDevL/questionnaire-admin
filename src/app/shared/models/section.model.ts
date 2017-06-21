export class Section{
    _id?: String;
    hasChildren: Boolean;
    name: String;
    children?: Section[];

    constructor(name: String) {
        this.name = name;
        this.children = [];
        this.hasChildren = true;
    }
}
