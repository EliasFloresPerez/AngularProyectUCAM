import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
const routes: Routes = [
  {
    path:'',
    children:[
      {path:  'app', component: PruebaComponent},
      { path: 'mostrar/:numero', component: MostrarComponent },
      {path: 'acerca', component: AcercaDeComponent},
      {path: '**', redirectTo: 'app'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
