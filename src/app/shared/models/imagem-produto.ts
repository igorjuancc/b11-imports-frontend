import { ProdutoCor } from "./produto-cor";

export class ImagemProduto {
    constructor(
        public id?: number,
        public ordem?: number,
        public link?: string,
        public file?: File 
    ) {}
}
