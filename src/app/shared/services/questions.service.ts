import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Question} from "../models/question.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class QuestionsService {

    constructor(private http: Http) {
    }

    getQuestions(section_id: String): Observable<Question[]>{
        return this.http.get(`/api/questions/?section_id=${section_id}`).map((response: Response) => response.json());
    }

    postQuestion(question: Question): Observable<Question>{
        return this.http.post(`/api/questions/`, question).map((response: Response) => response.json());
    }

}
