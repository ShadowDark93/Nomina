import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { DetalleNominaComponent} from './components/detalle-nomina/detalle-nomina.component';

const routes: Routes = [
  { path: '', component: ListPersonasComponent },
  { path: 'addPersona', component: PersonaComponent },
  { path: 'editPersona/:id', component: PersonaComponent },
  { path: 'nomina', component: NominaComponent },
  { path: 'detalleNomina', component: DetalleNominaComponent },
  { path: 'editNomina/:id', component: DetalleNominaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
