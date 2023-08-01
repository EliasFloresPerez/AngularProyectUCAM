import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [SidebarComponent]
})
export class HeaderModule { }
