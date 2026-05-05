import { Injectable } from '@angular/core';
import { Categoria } from '../../shared/models';

export const CATEGORIAS_MOCK: Categoria[] = [

    new Categoria(
        1,
        'Chuteira'
    ),

    new Categoria(
        2,
        'Tênis'
    ),

    new Categoria(
        3,
        'Camisa'
    ),

    new Categoria(
        4,
        'Calção'
    ),

    new Categoria(
        5,
        'Meião'
    ),

    new Categoria(
        6,
        'Luva'
    ),

    new Categoria(
        7,
        'Jaqueta'
    ),

    new Categoria(
        8,
        'Moletom'
    ),

    new Categoria(
        9,
        'Bola'
    ),

    new Categoria(
        10,
        'Caneleira'
    ),

    new Categoria(
        11,
        'Munhequeira'
    ),

    new Categoria(
        12,
        'Boné'
    ),

    new Categoria(
        13,
        'Mochila'
    ),

    new Categoria(
        14,
        'Agasalho'
    ),

    new Categoria(
        15,
        'Regata'
    )

];

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  listarTodas(): Categoria[] {
    return CATEGORIAS_MOCK;    
  }

}
