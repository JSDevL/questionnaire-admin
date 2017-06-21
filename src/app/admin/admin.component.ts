import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Section} from "../shared/models/section.model";
import {TreeComponent, TreeNode} from "angular-tree-component";
import {SectionsService} from "../shared/services/sections.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    providers: [SectionsService]
})
export class AdminComponent implements OnInit, OnDestroy {

    @ViewChild('sectionsTree')
    sectionsTree: TreeComponent;

    public sectionsTreeOptions = {
        getChildren: (node: TreeNode) => {
            return this.sectionsService.getSectionChildren((<Section>node.data)._id).toPromise();
        }
    };

    public rootSection: Section;
    public activeSection_id: String;

    constructor(private sectionsService: SectionsService) {
    }

    ngOnInit() {
        this.sectionsService.getRootSection().subscribe( (rootSection: Section) => {
            this.rootSection = rootSection;
        });
    }

    onActivate(event){
        this.activeSection_id = (<Section>event.node.data)['id'];
    }

    ngOnDestroy() {}

}
