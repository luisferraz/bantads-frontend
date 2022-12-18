export class Transacao {

    constructor(
        public id: number,
        public dataHora: string,
        public tipo: string,
        public idCliente: number,
        public valor: number,
        public idClienteDestino: number
    ) { }
}
