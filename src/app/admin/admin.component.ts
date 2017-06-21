import {Component, OnInit} from '@angular/core';
import {Section} from "../shared/models/section.model";
import {ITreeNode} from "angular-tree-component/dist/defs/api";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

}
