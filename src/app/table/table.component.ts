import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AUTOMOVILES } from '../data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  constructor() { }

  ngOnInit(){
    this.autos = AUTOMOVILES;
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

}
