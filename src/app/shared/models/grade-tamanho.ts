import { FaixaEtaria, Genero } from "../enums";
import { Categoria } from "./categoria";
import { GradeTamanhoItem } from "./grade-tamanho-item";

export class GradeTamanho {
    constructor(
        public categoria?: Categoria,
        public genero?: Genero,
        public faixaEtaria?: FaixaEtaria,
        public itens: GradeTamanhoItem[] = []
    ) {}
}
