import { Injectable } from '@angular/core';
import { Cor } from '../../shared/models';

export const CORES_MOCK: Cor[] = [

  new Cor(
    1,
    'Preto'
  ),

  new Cor(
    2,
    'Branco'
  ),

  new Cor(
    3,
    'Vermelho'
  ),

  new Cor(
    4,
    'Azul'
  ),

  new Cor(
    5,
    'Verde'
  ),

  new Cor(
    6,
    'Amarelo'
  ),

  new Cor(
    7,
    'Laranja'
  ),

  new Cor(
    8,
    'Roxo'
  ),

  new Cor(
    9,
    'Rosa'
  ),

  new Cor(
    10,
    'Cinza'
  ),

  new Cor(
    11,
    'Marrom'
  ),

  new Cor(
    12,
    'Bege'
  ),

  new Cor(
    13,
    'Dourado'
  ),

  new Cor(
    14,
    'Prata'
  ),

  new Cor(
    15,
    'Neon'
  ),

  new Cor(
    16,
    'Azul Marinho'
  ),

  new Cor(
    17,
    'Vinho'
  ),

  new Cor(
    18,
    'Turquesa'
  ),

  new Cor(
    19,
    'Lilás'
  ),

  new Cor(
    20,
    'Off White'
  )

];

@Injectable({
  providedIn: 'root',
})
export class CorService {
  listarTodas(): Cor[] {
    return CORES_MOCK;
  }
}
