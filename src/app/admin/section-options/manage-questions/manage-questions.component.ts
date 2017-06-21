import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Question} from "../../../shared/models/question.model";
import {QuestionsService} from "../../../shared/services/questions.service";
import {NgForm} from "@angular/forms";
import * as _ from 'underscore';

@Component({
    selector: 'app-manage-questions',
    templateUrl: './manage-questions.component.html',
    styleUrls: ['./manage-questions.component.scss'],
    providers: [QuestionsService]
})
export class ManageQuestionsComponent implements OnInit, OnChanges {

    @ViewChild('newQuestionForm')
    newQuestionForm: NgForm;

    @Input('section_id')
    section_id: String;

    public questions: Question[];
    private options: String[] = [];

    constructor(private questionsService: QuestionsService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['section_id'].currentValue) {
            this.questions = undefined;
            this.questionsService.getQuestions(changes['section_id'].currentValue).subscribe((questions: Question[]) => {
                this.questions = questions;
            })
        }
    }

    ngOnInit() {
    }

    addOption() {
        this.options.push(this.newQuestionForm.value['option']);
        this.newQuestionForm.form.patchValue({'option': ''});
    }

    removeOption(toRemove: String) {
        this.options = _.reject(this.options, (option: String) => option === toRemove);
    }

    postQuestion() {
        const newQuestion: Question = {
            ...this.newQuestionForm.form.value,
            options: this.options,
            section_id: this.section_id
        };

        this.questionsService.postQuestion(newQuestion).subscribe((question: Question) => {
            this.questions.push(question);
        });
    }

}
