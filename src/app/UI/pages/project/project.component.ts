import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../domain/model/project';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { GetProjectUsecase } from '../../../domain/usecase/get-project.usecase';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  dataCategory = [
    {
      item: 1,
      name: 'Health',
    },
    {
      item: 2,
      name: 'Human Resources',
    },
    {
      item: 3,
      name: 'Marketing',
    },
    {
      item: 4,
      name: 'Software Development',
    },
  ];

  filterFlag: boolean;

  public form: FormGroup;
  dataProjects: Array<Project> = [];

  displayedColumns: string[] = ['id', 'projectId', 'name', 'rating', 'category'];
  dataSource!: MatTableDataSource<Project>;


  constructor(
    private fb: FormBuilder,
    private getProjectUsecase: GetProjectUsecase
  ) {
    this.form = this.FormGroup
    this.filterFlag = false;
  }


  ngOnInit(): void {}


  public get FormGroup(): FormGroup {
    return this.fb.group({
      numElement: [null, [Validators.required, Validators.max(100)]],
      nameCategory: [null, [Validators.required]],
    });
  }


  getProjectsByFilter(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const element = this.form.get('numElement')?.value;
      const category = this.form.get('nameCategory')?.value
      this.getProjectUsecase.getProjectsByFilter(element, category).subscribe({
        next: (resp: Array<Project>) => {
          this.dataProjects = resp;
          this.dataSource = new MatTableDataSource(this.dataProjects);
          this.filterFlag = true;
        },
        error: (_error: HttpErrorResponse) => {
          console.log(_error.error.message);
        },
      });
    }
  }

  resetFilter(): void {
    this.form.reset();
    this.filterFlag = false;
  }


}
