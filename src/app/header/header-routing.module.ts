import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'inicio', component: SidebarComponent},
      {path: '**', redirectTo: 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
