import { Injectable } from "@angular/core";
import { ProjectGateway } from "../model/gateway/project-gateway";


@Injectable({
    providedIn: 'root'
})

export class GetProjectUsecase {

    constructor(
        private projectGateway: ProjectGateway // hace referencia a la clase abstracta Project
    ) { }

    public getAllProjects() {
        return  this.projectGateway.getAllProjects(); // hace un llamdado al metodo getAllProjects de la clase abstracta Project, para obtener todos los proyectos
    }

    public getProjectsByFilter() {
        return this.projectGateway.getProjectsByFilter(5, 'nameCategory'); // hace un llamado al metodo getProjectsByFilter de la clase abstracta Project, para obtener los proyectos que cumplan con el filtro
    }
}


