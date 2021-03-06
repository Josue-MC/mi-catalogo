import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';
  pageSize: number;
  page: number;
  displayProgressBar: boolean;
  
  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true, windowClass: 'modal-list' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

  ngOnInit(){
    this.displayProgressBar = true;
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      },1500)

    })
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

}
