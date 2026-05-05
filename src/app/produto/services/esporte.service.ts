import { Injectable } from '@angular/core';
import { Esporte } from '../../shared/models';

export const ESPORTES_MOCK: Esporte[] = [

    new Esporte(
        1,
        'Futebol'
    ),

    new Esporte(
        2,
        'Futsal'
    ),

    new Esporte(
        3,
        'Society'
    ),

    new Esporte(
        4,
        'Corrida'
    ),

    new Esporte(
        5,
        'Academia'
    ),

    new Esporte(
        6,
        'Basquete'
    ),

    new Esporte(
        7,
        'Vôlei'
    ),

    new Esporte(
        8,
        'Handebol'
    ),

    new Esporte(
        9,
        'Tênis'
    ),

    new Esporte(
        10,
        'Beach Tennis'
    ),

    new Esporte(
        11,
        'Skate'
    ),

    new Esporte(
        12,
        'Ciclismo'
    ),

    new Esporte(
        13,
        'Natação'
    ),

    new Esporte(
        14,
        'Treinamento Funcional'
    ),

    new Esporte(
        15,
        'Crossfit'
    ),

    new Esporte(
        16,
        'Rugby'
    ),

    new Esporte(
        17,
        'Golfe'
    ),

    new Esporte(
        18,
        'Artes Marciais'
    ),

    new Esporte(
        19,
        'Surf'
    ),

    new Esporte(
        20,
        'Trilha'
    )
];

@Injectable({
  providedIn: 'root',
})
export class EsporteService {
  listarTodos(): Esporte[] {
      return ESPORTES_MOCK;    
    }
}
