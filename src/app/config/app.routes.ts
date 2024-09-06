import { Routes } from '@angular/router';

export const routes: Routes = [
    

  {
    path: '',
    loadComponent: () => import('../UI/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'project',
    loadComponent: () => import('../UI/pages/project/project.component').then(m => m.ProjectComponent)
  },
  // redireccion al home si no se encuentra la ruta
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
