import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Section} from "../models/section.model";
import "rxjs/Rx";
import {Subject} from "rxjs/Subject";

@Injectable()
export class SectionsService {

    rootSectionsSource: Subject<Section>;
    rootSection$: Observable<Section>;

    constructor(private http: Http) {
        this.rootSectionsSource = new Subject<Section>();
        this.rootSection$ = this.rootSectionsSource.asObservable();
    }

    getRootSection(): Observable<Section> {
        return this.http.get('/api/sections/root').map((response: Response) => {
            const section: Section = response.json();
            delete section.children;
            return section;
        });
    }

    getSectionChildren(section_id: String): Observable<Section[]> {
        return this.http.get(`/api/sections/${section_id}/children`).map((response: Response) => {
            const children = response.json();
            for (let child of children) {
                delete child['children'];
            }
            return children;
        });
    }

    getSection(section_id: String): Observable<Section>{
        return this.http.get(`/api/sections/${section_id}`).map((response: Response) => response.json() );
    }

    postSection(section: Section): Observable<Section> {
        return this.http.post(`/api/sections/`, section).map((response: Response) => response.json());
    }

    putSection(section_id: String, obj: any) {
        return this.http.put(`/api/sections/${section_id}`, obj).map((response: Response) => response.json());
    }

}
