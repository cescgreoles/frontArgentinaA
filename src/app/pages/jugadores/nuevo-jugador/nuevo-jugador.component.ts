import { Router } from '@angular/router';
import { JugadoresService } from './../../../services/jugadores.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.scss'],
})
export class NuevoJugadorComponent implements OnInit {
  newPlayer: any = {
    name: '',
    img: '',
    age: '',
    team: '',
    dorsal: '',
    position: '',
  };

  playerForm!: FormGroup;

  constructor(
    private jugadoresService: JugadoresService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      age: ['', [Validators.required]],
      team: ['', [Validators.required]],
      dorsal: ['', [Validators.required]],
      position: ['', [Validators.required]],
    });

    this.playerForm.valueChanges.subscribe((changes) => {
      this.newPlayer = changes;
    });
  }

  onSubmit() {
    console.log(this.playerForm);

    const formData = JSON.stringify(this.playerForm.value);
    // formData.append('img', this.playerForm.get('img')?.value);
    // formData.append('name', this.playerForm.get('name')?.value);
    // formData.append('age', this.playerForm.get('age')?.value);
    // formData.append('team', this.playerForm.get('team')?.value);
    // formData.append('dorsal', this.playerForm.get('dorsal')?.value);
    // formData.append('position', this.playerForm.get('position')?.value);
    console.log(formData);
    this.jugadoresService
      .postPlayer(formData)
      .subscribe(() => this.router.navigate(['/jugadores']));
  }
}
