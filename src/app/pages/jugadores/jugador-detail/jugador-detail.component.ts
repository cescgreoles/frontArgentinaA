import { JugadoresService } from './../../../services/jugadores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.scss'],
})
export class JugadorDetailComponent implements OnInit {
  id: any;
  myPlayer: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private jugadorService: JugadoresService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.jugadorService.getPlayer(this.id).subscribe((data: any) => {
        console.log(data);
        this.myPlayer = { ...data };
      });
    });
  }
  deletePlayer() {
    this.jugadorService.deletePlayer(this.id).subscribe();
    this.router.navigate(['/jugadores']);
  }

  ngOnInit(): void {}
}
