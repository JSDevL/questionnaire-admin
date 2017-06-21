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
            return this.sectionsService.getSectionChildren((<Section>node.data)['_id']).toPromise();
        }
    };

    public rootSection: Section;
    public activeSection_id: String;
    private activeSection: Section;

    constructor(private sectionsService: SectionsService) {
    }

    ngOnInit() {
        this.sectionsService.getRootSection().subscribe( (rootSection: Section) => {
            this.rootSection = rootSection;
        });
    }

    onActivate(event){
        this.activeSection = <Section>event.node.data;
        this.activeSection_id = this.activeSection._id;
    }

    onNewSection(section: Section) {
        if (this.sectionsTree.treeModel.getActiveNode().isExpanded) {
            this.sectionsTree.treeModel.getActiveNode().data.children.push(section);
            this.sectionsTree.treeModel.update();
        }
    }

    ngOnDestroy() {}

}
