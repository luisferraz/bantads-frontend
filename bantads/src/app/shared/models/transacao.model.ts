import { Conta } from "./conta.model";

export class Transacao {

    constructor(
        public id: number,
        public dataHora: string,
        public tipo: string,
        public valor: number,
        public contaOrigem: Conta,
        public contaDestino: Conta
    ) { }
}
