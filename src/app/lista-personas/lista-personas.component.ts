import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  agregarPersona=false;
  constructor() {
    setTimeout(
      ()=>{this.agregarPersona=true}
      ,
      5000
    )
   }

  ngOnInit(): void {

  }

}
