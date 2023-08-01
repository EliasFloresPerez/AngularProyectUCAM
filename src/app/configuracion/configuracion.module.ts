import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { PanelComponent } from './pages/panel/panel.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    HeaderModule
  ]
})
export class ConfiguracionModule { }
