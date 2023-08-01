import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Sidebar',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: '',
    loadChildren: () => import('./aplicacion/aplicacion.module').then(m => m.AplicacionModule)
  },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
