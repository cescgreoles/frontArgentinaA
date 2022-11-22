import { AuthconfigInterceptor } from './services/authconfig.interceptor';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePlayerComponent } from './pages/jugadores/update-player/update-player.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent,
    JugadoresComponent,
    HistoryComponent,
    NuevoJugadorComponent,
    JugadorDetailComponent,
    NavbarComponent,
    UpdatePlayerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthconfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
