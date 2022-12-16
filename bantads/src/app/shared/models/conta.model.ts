import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Conta {

  constructor(
    public cliente?: Cliente,
    public numero?: number,
    public limite?: number,
    public saldo?: number,
    public gerente?: Gerente,
    public histórico?: string[]
  ) {}
}
