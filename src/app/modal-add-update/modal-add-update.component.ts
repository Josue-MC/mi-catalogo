import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';


@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit{

  accion: string;
  auto: Automovil = {} as Automovil;
  desde: number;
  hasta: number;
  tamaño = this.hasta - this.desde;
  modelos: number[];
  constructor(public activeModal: NgbActiveModal) { }

 ngOnInit() {

 }

 onSubmit() {
   this.ArregloModelos(this.desde, this.hasta)
   this.auto.modelos = this.modelos;
   this.activeModal.close(this.auto)
 }

 ArregloModelos(desde: number, hasta:number) {

  for (let index = 0; index < this.tamaño; index++) {
    
    if (index = 0) {
      this.modelos[0] = desde;

    } 
    else 
    {
      this.modelos[index] = desde;
    }
    desde++;
  }
      
 }

}
