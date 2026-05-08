import { GradeTamanhoItem } from "./grade-tamanho-item";

export class ProdutoVariacao {
    constructor(
        public id?: number,
        public tamanho?: GradeTamanhoItem,
        public sku?: string,
        public estoqueAtual?: number,
        public precoOriginal?: number,
        public precoPromocional?: number,
        public ativo?: boolean
    ) {}
}