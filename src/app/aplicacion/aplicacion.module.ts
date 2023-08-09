import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { MostrarComponent } from './pages/mostrar/mostrar.component';

@NgModule({
  declarations: [
    PruebaComponent,
    MostrarComponent,
   
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [ApiService],
})
export class AplicacionModule { }
