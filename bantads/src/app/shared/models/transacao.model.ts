import { Conta } from "./conta.model";

export enum TiposOperacao {
    Saque = 'SAQUE',
    Deposito = 'DEPÓSITO',
    Transferencia = 'TRANSFERÊNCIA'
}

export enum Fluxo {
    Saida = 'SAÍDA',
    Entrada = 'ENTRADA'
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


