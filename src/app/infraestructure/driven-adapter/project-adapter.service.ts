import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../domain/model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdapterService {

  private apiUrl = 'http://localhost:9095/api/v1/project/'; // url de la api

  constructor(
    private http: HttpClient
  ) { }

  public getAllProjects() {
    const url = `${this.apiUrl}getAllProjects`;
    return this.http.get<Array<Project>>(url);
  }
}
