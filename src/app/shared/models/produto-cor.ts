import { Cor } from "./cor";
import { ImagemProduto } from "./imagem-produto";
import { Produto } from "./produto";
import { ProdutoVariacao } from "./produto-variacao";

export class ProdutoCor {
    constructor(
        public id?: number,
        public corPrincipal?: Cor,
        public coresComplementares: Cor[] = [],
        public imagens: ImagemProduto[] = [],
        public variacoes: ProdutoVariacao[] = []
    ) {}
}
