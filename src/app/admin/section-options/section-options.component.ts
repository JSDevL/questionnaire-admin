import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Section} from "../../shared/models/section.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-section-options',
    templateUrl: './section-options.component.html',
    styleUrls: ['./section-options.component.scss']
})
export class SectionOptionsComponent implements OnInit {

    @ViewChild('newSectionForm')
    newSectionForm: NgForm;

    @Input('activeSection')
    activeSection: Section;

    @Output('newSection')
    newSection = new EventEmitter<Section>();

    constructor() {
    }

    ngOnInit() {
    }

    putSection() {
        if (this.newSectionForm.valid) {
            const newSection = new Section(this.newSectionForm.value['name']);
            this.newSection.emit(newSection);
            this.newSectionForm.reset();
        }
    }

}
