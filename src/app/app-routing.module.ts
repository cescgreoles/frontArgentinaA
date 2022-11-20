import { JugadorDetailComponent } from './pages/jugadores/jugador-detail/jugador-detail.component';
import { HistoryComponent } from './pages/history/history.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SeleccionComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugadores/:id', component: JugadorDetailComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
