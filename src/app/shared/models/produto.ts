import { FaixaEtaria } from "../enums/faixa-etaria";
import { Genero } from "../enums/genero";
import { Categoria } from "./categoria";
import { Esporte } from "./esporte";
import { Marca } from "./marca";

export class Produto {
    constructor(
        public id?: number,
        public marca?: Marca,
        public genero?: Genero,
        public faixaEtaria?: FaixaEtaria,
        public categoria?: Categoria,
        public esporte?: Esporte,
        public nome?: string,
        public descricao?: string,
        public ativo?: boolean,
        public lancamento?: Date
    ) {}
}
