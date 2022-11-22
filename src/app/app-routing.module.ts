import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdatePlayerComponent } from './pages/jugadores/update-player/update-player.component';
import { NuevoJugadorComponent } from './pages/jugadores/nuevo-jugador/nuevo-jugador.component';
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
  { path: 'nuevo-jugador', component: NuevoJugadorComponent },
  { path: 'updatePlayer/:id', component: UpdatePlayerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
