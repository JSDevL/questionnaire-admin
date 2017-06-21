import {Component, OnInit, ViewChild} from "@angular/core";
import {Section} from "../shared/models/section.model";
import {TreeComponent} from "angular-tree-component";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    @ViewChild('sectionsTree')
    sectionsTree: TreeComponent;

    public sections: Section[] = [{
        name: 'root',
        children: [],
        root: true
    }];

    public activeSection: Section;

    constructor() {
    }

    ngOnInit() {
    }

    onActivate(event){
        this.activeSection = event.node.data;
    }

    onNewSection(section: Section) {
        this.activeSection.children.push(section);
        this.sectionsTree.treeModel.update();
    }

}
