import { GradeTamanhoItem } from "./grade-tamanho-item";
import { ProdutoCor } from "./produto-cor";

export class ProdutoVariacao {
    constructor(
        public id?: number,
        public produtoCor?: ProdutoCor,
        public tamanho?: GradeTamanhoItem,
        public sku?: string,
        public estoqueAtual?: number,
        public precoOriginal?: number,
        public precoPromocional?: number,
        public ativo?: boolean,
    ) {}
}