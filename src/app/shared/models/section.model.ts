export class Section{
    _id?: String;
    hasChildren: Boolean;
    name: String;
    children?: Section[] | String[];

    constructor(name: String) {
        this.name = name;
        this.children = [];
        this.hasChildren = false;
    }
}
