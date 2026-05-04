import { GradeTamanho } from "./grade-tamanho";

export class GradeTamanhoItem {
    constructor(
        public id?: number,
        public gradeTamanho?: GradeTamanho,
        public tamanho?: string,
        public ordem?: number
    ) {}    
}
