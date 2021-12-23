import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonaComponent } from './components/persona/persona.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { DetalleNominaComponent } from './components/detalle-nomina/detalle-nomina.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonaComponent,
    NominaComponent,
    ListPersonasComponent,
    DetalleNominaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
