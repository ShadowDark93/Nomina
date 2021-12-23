import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  addPersona: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addPersona = this.fb.group({
      documento:['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      cargo:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    const persona: Persona = {
      documento: this.addPersona.get('documento')?.value,
      nombres: this.addPersona.get('nombres')?.value,
      apellidos: this.addPersona.get('apellidos')?.value,
      cargo: this.addPersona.get('cargo')?.value,
    };

    console.log(persona);
  }

}
