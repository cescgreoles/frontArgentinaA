import { JugadoresService } from './../../services/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss'],
})
export class JugadoresComponent implements OnInit {
  myPlayers?: any[];
  constructor(private playerservice: JugadoresService) {
    this.playerservice.getAllPlayers().subscribe((data: any) => {
      console.log(data);

      const playerData: any[] = data.map((player: any) => ({
        id: player._id,
        name: player.name,
        img: player.img,
        dorsal: player.dorsal,
      }));

      this.myPlayers = [...playerData];
    });
  }

  ngOnInit(): void {}
}
