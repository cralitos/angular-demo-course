import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombre = "Juan"
  private apellido = "Perez"
  edad = 28

  getApellido(){
    return this.apellido
  }

}
