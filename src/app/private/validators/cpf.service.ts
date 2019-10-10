import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  public isValidCPF: boolean = true;


  constructor() { }

  verificacaoCPF(value) {
    let strCPF = value;
    let cpfFormatado = this.formatarCPF(strCPF);
    value = cpfFormatado;
  }

  validarCPF(strCPF) {
    let soma: number = 0;
    let resto: number;

    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10))) return false;

    resto = 0;
    for (let i = 1; i <= 10; i++) resto = resto + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    resto = (resto * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  formatarCPF(value) {
    value = value.replace(/\D/g, "");
    this.isValidCPF = this.validarCPF(value);
    console.log(this.isValidCPF);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

}
