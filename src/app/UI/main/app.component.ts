import { GetProjectUsecase } from './../../domain/usecase/get-project.usecase';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ranking_front';


  constructor(
    private getProjectUsecase: GetProjectUsecase
  ) {}

  ngOnInit() {
    this.getProjectUsecase.getAllProjects().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
