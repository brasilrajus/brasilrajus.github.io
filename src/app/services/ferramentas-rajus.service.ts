import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FerramentasRajusService {

  imc:number;

  constructor() { }

  calcularIMC(peso:number, altura:number) {
    return peso/((altura/100)*(altura/100));
  }
}
