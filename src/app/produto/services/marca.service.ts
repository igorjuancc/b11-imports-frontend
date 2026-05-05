import { Injectable } from '@angular/core';
import { Marca } from '../../shared/models';

export const MARCAS_MOCK: Marca[] = [

  new Marca(
    1,
    'Nike'
  ),

  new Marca(
    2,
    'Adidas'
  ),

  new Marca(
    3,
    'Puma'
  ),

  new Marca(
    4,
    'Mizuno'
  ),

  new Marca(
    5,
    'Umbro'
  ),

  new Marca(
    6,
    'Penalty'
  ),

  new Marca(
    7,
    'Asics'
  ),

  new Marca(
    8,
    'Olympikus'
  ),

  new Marca(
    9,
    'New Balance'
  ),

  new Marca(
    10,
    'Fila'
  ),

  new Marca(
    11,
    'Under Armour'
  ),

  new Marca(
    12,
    'Reebok'
  ),

  new Marca(
    13,
    'Kappa'
  ),

  new Marca(
    14,
    'Diadora'
  ),

  new Marca(
    15,
    'Topper'
  ),

  new Marca(
    16,
    'Joma'
  ),

  new Marca(
    17,
    'Wilson'
  ),

  new Marca(
    18,
    'Speedo'
  ),

  new Marca(
    19,
    'Poker'
  ),

  new Marca(
    20,
    'Uhlsport'
  )

];

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  listarTodas(): Marca[] {
    return MARCAS_MOCK;
  }
}
