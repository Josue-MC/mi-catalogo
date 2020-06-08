import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalConfirmarEliminarComponent } from '../modal-confirmar-eliminar/modal-confirmar-eliminar.component';


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


  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(){
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response => console.log(response));
      },
      (reason) =>{
        console.log(reason)
      }
    )
  }

  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto) => {
        this.autoService.addAutos(auto).subscribe(response => {

        })
      },
      (reason) => {
        console.log(reason)
      }
    );
  }

  OpenModalEliminar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmarEliminarComponent, { centered: true })
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(

      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          console.log("Respuesta cuando se termina de eliminar un auto")
          console.log(response)
        })
      },
      (reason) => {
        console.log(reason)
      }
    )

  }

  

}
