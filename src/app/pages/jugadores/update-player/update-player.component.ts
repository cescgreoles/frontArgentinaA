import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JugadoresService } from './../../../services/jugadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss'],
})
export class UpdatePlayerComponent implements OnInit {
  playerForm!: FormGroup;
  updatedPlayer!: any;
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private JugadoresService: JugadoresService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.JugadoresService.getPlayer(this.id).subscribe((data) => {
        console.log(data);
        this.updatedPlayer = data;
        this.playerForm = this.formBuilder.group({
          name: [this.updatedPlayer.name, [Validators.required]],
          img: [this.updatedPlayer.img, [Validators.required]],
          team: [this.updatedPlayer.team, [Validators.required]],
          age: [this.updatedPlayer.age, [Validators.required]],
          dorsal: [this.updatedPlayer.dorsal, [Validators.required]],
          position: [this.updatedPlayer.position, [Validators.required]],
        });
      });
    });

    this.playerForm.valueChanges.subscribe((changes) => {
      this.updatedPlayer = changes;
    });
  }

  onSubmit() {
    const formData = new FormData();
    // formData.append('img', this.playerForm.get('img')?.value);
    // formData.append('name', this.playerForm.get('name')?.value);
    // formData.append('race', this.playerForm.get('race')?.value);
    console.log(formData);
    this.JugadoresService.putPlayer(this.id, formData).subscribe(() =>
      this.router.navigate(['/jugadores'])
    );
  }
}
