import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../Servicio/servicio.service";
import { FormControl } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import{ModalDetalleComponent} from '../../Modales/modal-detalle/modal-detalle.component'

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  Rows :number = 0;
  Cars :any ;
  CarsOrigen :any ;
  cols :number = 4;
  show ;
  filter = new FormControl("");
  constructor(public broker: ServicioService ,private modalService: NgbModal) { 
    this.show = 'search'
    this.filter.valueChanges.subscribe((val) => {
      if(val){ this.show = 'close'} else{ this.show = 'search'}     
      setTimeout(() => {
        this.getByMarcas(val);
      });
    });
  }

  ngOnInit(): void {
    this.broker.getCars().subscribe((result: any) => {
     this.CarsOrigen = result.cars; 
     this.Cars = this.CarsOrigen;
     this.Rows = Math.ceil(this.Cars.length / this.cols);   
    }, (error) => {
      console.error(error);
    });
  }

  getByMarcas(val:string){
    console.log(val)
    this.Cars = this.CarsOrigen.filter((carros:any) => {
      return (        
        (carros.Marca.toLowerCase().includes(val.toLowerCase()))        
      );
    });    
  }

  Limpiar(){
    this.filter.setValue('');
    this.show = 'search'
   }


   verdetalles(car:any){
    const modalRef =  this.modalService.open(ModalDetalleComponent, {
      windowClass: "modalClassNominaProceso",
      size: "lg",
      centered: true,
    });

    modalRef.componentInstance.detalles =  car;
  }

}
