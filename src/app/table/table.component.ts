import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  pageSize: number;
  page: number;


  constructor(private autoService: AutosService) { }

  ngOnInit(){
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  

}
