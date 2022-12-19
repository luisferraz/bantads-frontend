import { Conta } from "./conta.model";

export enum TiposOperacao {
    Saque = 1, Deposito, Transferencia
}

export enum Fluxo {
    Saida = 1, Entrada
}

export class Transacao {
    public id?: number

    constructor(
        public dataHora: Date,
        public tipo: TiposOperacao,
        public valor: number,
        public contaOrigem: Conta,
        public fluxo: Fluxo,
        public contaDestino?: Conta
    ) { }
}


