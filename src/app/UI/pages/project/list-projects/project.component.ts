import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../../domain/model/project';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { GetProjectUsecase } from '../../../../domain/usecase/get-project.usecase';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  dataProjects: Array<Project> = [];

  displayedColumns: string[] = ['id', 'projectId', 'name', 'rating', 'category', 'actions'];
  dataSource!: MatTableDataSource<Project>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private getProjectUsecase: GetProjectUsecase
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
  }


ngAfterViewInit() {
  if (this.dataSource && this.paginator) {
    this.dataSource.paginator = this.paginator;
  }
}


  getAllProjects(): void {
    this.getProjectUsecase.getAllProjects().subscribe({
      next: (resp: Array<Project>) => {
        console.log("Valor de los projectos: ", resp);
        this.dataProjects = resp;
        this.dataSource = new MatTableDataSource(this.dataProjects);
        this.dataSource.paginator = this.dataProjects.length > 0 ? this.paginator : null;
      },
      error: (_error: HttpErrorResponse) => {
        console.log(_error.error.message);
      },
    });
  }


}
