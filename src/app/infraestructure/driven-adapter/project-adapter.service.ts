import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../domain/model/project';
import { ProjectGateway } from '../../domain/model/gateway/project-gateway';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdapterService extends ProjectGateway { // extiendo de la interfaz ProjectGateway ya que es la que se encarga de la comunicacion con el dominio

  private apiUrl = 'http://localhost:9095/api/v1/project/'; // url de la api

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public getAllProjects() {
    const url = `${this.apiUrl}getAllProjects`;
    return this.http.get<Array<Project>>(url);
  }

  public getProjectsByFilter(numElements: number, nameCategory: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('numElements', Number(numElements));
    queryParams = queryParams.append('nameCategory', String(nameCategory));
    const url = `${this.apiUrl}getProjectFilter`;
    return this.http.get<Array<Project>>(url, {params: queryParams});
  }

}
