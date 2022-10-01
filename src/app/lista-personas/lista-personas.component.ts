import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  agregarPersona=false;
  status="no se ha agregado persona"
  tituloPersona = "";
  constructor() {
    setTimeout(
      ()=>{this.agregarPersona=true}
      ,
      5000
    )
   }

   onAgregarPersona(){
    this.status="persona agregada"
   }

   onModificarPersona(event: Event){
    this.tituloPersona = (<HTMLInputElement>event.target).value;
   }

  ngOnInit(): void {

  }

}
