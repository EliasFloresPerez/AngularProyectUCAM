import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './aplicacion/pages/acerca-de/acerca-de.component';
import { SidebarComponent } from './header/pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
