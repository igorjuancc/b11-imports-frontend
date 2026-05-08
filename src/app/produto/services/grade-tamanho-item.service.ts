import { Injectable } from '@angular/core';
import { GradeTamanhoItem } from '../../shared/models';

export const GRADE_TAMANHO_ITENS_MOCK: GradeTamanhoItem[] = [

  new GradeTamanhoItem(1, '37', 1),
  new GradeTamanhoItem(2, '38', 2),
  new GradeTamanhoItem(3, '39', 3),
  new GradeTamanhoItem(4, '40', 4),
  new GradeTamanhoItem(5, '41', 5),
  new GradeTamanhoItem(6, '42', 6),
  new GradeTamanhoItem(7, '43', 7),

  new GradeTamanhoItem(8, 'PP', 1),
  new GradeTamanhoItem(9, 'P', 2),
  new GradeTamanhoItem(10, 'M', 3),
  new GradeTamanhoItem(11, 'G', 4),
  new GradeTamanhoItem(12, 'GG', 5),

  new GradeTamanhoItem(13, '4', 1),
  new GradeTamanhoItem(14, '6', 2),
  new GradeTamanhoItem(15, '8', 3),
  new GradeTamanhoItem(16, '10', 4),
  new GradeTamanhoItem(17, '12', 5),

  new GradeTamanhoItem(18, '44', 8),
  new GradeTamanhoItem(19, '45', 9),
  new GradeTamanhoItem(20, '46', 10)
];

@Injectable({
  providedIn: 'root',
})

export class GradeTamanhoItemService {
  listarTodos(): GradeTamanhoItem[] {
    return GRADE_TAMANHO_ITENS_MOCK;
  }
}
