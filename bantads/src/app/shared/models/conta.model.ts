import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Conta {
  public id?: number;

  constructor(
    public numero?: number,
    public cliente?: Cliente,
    public limite?: number,
    public saldo?: number,
    public gerente?: Gerente,
    public histórico?: string[]
  ) { }
}
