# FrontArgentina

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
@Component({
selector: 'app-new-character',
templateUrl: './new-character.component.html',
styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {
newCharacter: any={
name: '',
img: '',
race: ''
};
characterForm!: FormGroup;
constructor(private characterService: CharactersService, private formBuilder: FormBuilder, private router: Router) { }
ngOnInit(): void {
this.characterForm = this.formBuilder.group({
name: ['', [Validators.required]],
img: ['', [Validators.required, Validators.minLength(3)]],
race: ['', [Validators.required]]
})
this.characterForm.valueChanges.subscribe((changes) => {
this.newCharacter = changes;
})
}
onFileChange(event:any){
const file = event.target.files[0];
console.log(file);
this.characterForm.patchValue({
img: file
})
}
onSubmit(){
const formData = new FormData();
formData.append('img', this.characterForm.get('img')?.value);
formData.append('name', this.characterForm.get('name')?.value);
formData.append('race', this.characterForm.get('race')?.value);
console.log(formData)
this.characterService.postCharacter(formData).subscribe()
this.router.navigate(['/characters'])
}
}
