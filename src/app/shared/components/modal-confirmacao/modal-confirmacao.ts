import { Component, Input } from '@angular/core';
import { DadosModalConfirmacao } from '../../models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacao',
  standalone: false,
  templateUrl: './modal-confirmacao.html',
  styleUrl: './modal-confirmacao.css',
})
export class ModalConfirmacao {
  @Input() dadosModal!: DadosModalConfirmacao;

  constructor(public activeModal: NgbActiveModal) { }
}
