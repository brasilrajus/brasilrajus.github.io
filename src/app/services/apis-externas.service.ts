import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisExternasService {

  constructor( ) { };

   public apiCep = 'https://viacep.com.br/ws/57310300/json/?callback';

}
