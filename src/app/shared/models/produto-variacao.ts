import { Cor } from "./cor";
import { GradeTamanhoItem } from "./grade-tamanho-item";
import { ImagemVariacaoProduto } from "./imagem-variacao-produto";
import { Produto } from "./produto";

export class ProdutoVariacao {
    constructor(
        public id?: number,
        public produto?: Produto,
        public cor1?: Cor,
        public cor2?: Cor,
        public tamanho?: GradeTamanhoItem,
        public sku?: string,
        public quantidade?: number,
        public preco?: number,
        public precoPromocional?: number,
        public imagens: ImagemVariacaoProduto[] = []
    ) {}
}