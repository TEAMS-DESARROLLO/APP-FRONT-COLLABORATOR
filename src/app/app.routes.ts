import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component'),

    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component'),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
         children: [
          {
            path: 'home', 
            loadComponent: () => import('./pages/dashboard/home/home.component'),
          },
          {
            path: 'cursos-asignados', 
            loadComponent: () => import('./pages/dashboard/cursos-asignados/cursos-asignados.component'),
          }]

        //   }
        // ],
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },

];
