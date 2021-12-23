import { Persona } from 'src/app/interfaces/Persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {


  listPersonas: Persona[] = [
    { documento: 123, nombres: 'David', apellidos: 'Ortega', cargo: 'admin' },
    { documento: 231, nombres: 'Gordis', apellidos: 'Gamer', cargo: 'gamer' },


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
