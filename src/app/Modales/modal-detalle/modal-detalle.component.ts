import { Component, OnInit , Input } from '@angular/core';
import {NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss']
})
export class ModalDetalleComponent implements OnInit {
  @Input() detalles :any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
