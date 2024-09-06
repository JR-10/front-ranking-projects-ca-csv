import { Observable } from "rxjs";
import { Project } from "../project";

export abstract class ProjectGateway {

    abstract getAllProjects(): Observable<Array<Project>>;

    abstract getProjectsByFilter(numElements: number, nameCategory: string): Observable<Array<Project>>;
}