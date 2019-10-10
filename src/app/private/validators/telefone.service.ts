import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor() { }

  formatarTelefone(value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2 ");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    return value;
  }
}
