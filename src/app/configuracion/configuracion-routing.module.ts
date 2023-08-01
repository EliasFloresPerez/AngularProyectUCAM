import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'configuracion', component: PanelComponent},
      {path: '**', redirectTo: 'configuracion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
