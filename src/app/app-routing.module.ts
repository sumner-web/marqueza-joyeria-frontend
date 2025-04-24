import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosComponent } from './terminos/terminos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component'; // Importa el nuevo componente

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent }, // Ruta por defecto
  { path: 'terminos-y-condiciones', component: TerminosComponent }
  // ... otras rutas ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }