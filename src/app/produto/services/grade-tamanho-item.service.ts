import { Injectable } from '@angular/core';
import { GradeTamanhoItem } from '../../shared/models';

export const GRADE_TAMANHO_ITENS_MOCK: GradeTamanhoItem[] = [

  new GradeTamanhoItem(1, '37', 1),
  new GradeTamanhoItem(2, '38', 2),
  new GradeTamanhoItem(3, '39', 3),
  new GradeTamanhoItem(4, '40', 4),
  new GradeTamanhoItem(5, '41', 5),
  new GradeTamanhoItem(6, '42', 6),
  new GradeTamanhoItem(7, '43', 7)
];

@Injectable({
  providedIn: 'root',
})

export class GradeTamanhoItemService {
  listarTodos(): GradeTamanhoItem[] {
    return GRADE_TAMANHO_ITENS_MOCK;
  }
}
