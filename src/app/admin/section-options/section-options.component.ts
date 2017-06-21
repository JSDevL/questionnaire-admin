import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from "@angular/core";
import {Section} from "../../shared/models/section.model";
import {NgForm} from "@angular/forms";
import {SectionsService} from "../../shared/services/sections.service";

@Component({
    selector: 'app-section-options',
    templateUrl: './section-options.component.html',
    styleUrls: ['./section-options.component.scss']
})
export class SectionOptionsComponent implements OnInit, OnChanges{

    @ViewChild('newSectionForm')
    newSectionForm: NgForm;

    @Input('activeSection_id')
    activeSection_id: String;

    @Output('newSection')
    newSection = new EventEmitter<Section>();

    public activeSection: Section;

    constructor(private sectionsService: SectionsService) {
    }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['activeSection_id'].currentValue) {
            this.sectionsService.getSection(changes['activeSection_id'].currentValue).subscribe((section: Section) => {
                this.activeSection = section;
            });
        }
    }

    addSection() {
        if (this.newSectionForm.valid) {
            const newSection = new Section(this.newSectionForm.value['name']);
            this.sectionsService.postSection(newSection).subscribe((section: Section) => {
                this.sectionsService.putSection(this.activeSection._id, {$push: {children: section}})
                    .subscribe((updatedSection: Section) => {
                        // for section options
                        this.activeSection.children.push(section);
                        // for list tree
                        this.newSection.emit(section);
                        // reset form
                        this.newSectionForm.reset();
                    })
            });
        }
    }

    // putSection() {
    //     if (this.newSectionForm.valid) {
    //         const newSection = new Section(this.newSectionForm.value['name']);
    //         // this.sectionsService.putSection(this.activeSection_id, { $push: { children : newSection } }).subscribe( (section: Section) => {
    //         //     this.newSection.emit(newSection);
    //         //     this.newSectionForm.reset();
    //         // });
    //     }
    // }

}
