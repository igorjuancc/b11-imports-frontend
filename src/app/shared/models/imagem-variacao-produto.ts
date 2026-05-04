import { ProdutoVariacao } from "./produto-variacao";

export class ImagemVariacaoProduto {
    constructor(
        public id?: number,
        public produtoVariacao?: ProdutoVariacao,
        public ordem?: number,
        public link?: string
    ) {}
}
