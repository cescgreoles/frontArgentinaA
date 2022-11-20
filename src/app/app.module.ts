import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { HistoryComponent } from './pages/history/history.component';
import { NuevoJugadorComponent } from './pages/jugadores/nuevo-jugador/nuevo-jugador.component';
import { JugadorDetailComponent } from './pages/jugadores/jugador-detail/jugador-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent,
    JugadoresComponent,
    HistoryComponent,
    NuevoJugadorComponent,
    JugadorDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
