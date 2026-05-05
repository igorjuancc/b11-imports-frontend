import { ProdutoCor } from "./produto-cor";

export class ImagemProduto {
    constructor(
        public id?: number,
        public produtoCor?: ProdutoCor,
        public ordem?: number,
        public link?: string
    ) {}
}
