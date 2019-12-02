import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-administrador-cadastrar-postos',
  templateUrl: './administrador-cadastrar-postos.component.html',
  styleUrls: ['./administrador-cadastrar-postos.component.scss'],
})
export class AdministradorCadastrarPostosComponent implements OnInit {

  public estabelecimento: any = {
    nomeValidator: 'validate_base',
    cnpjValidator: 'validate_base',
    cepValidator: 'validate_base',
    enderecoValidator: 'validate_base',
    cidadeValidator: 'validate_base',
    bairroValidator: 'validate_base',
  };

  constructor(
    private validator: ValidatorsService,
    private auth: AuthService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  adicionar() {
    this.estabelecimento.nomeValidator == 'validate_true' &&
      this.estabelecimento.cnpjValidator == 'validate_true' &&
      this.estabelecimento.cepValidator == 'validate_true' &&
      this.estabelecimento.enderecoValidator == 'validate_true' &&
      this.estabelecimento.bairroValidator == 'validate_true' &&
      this.estabelecimento.cidadeValidator == 'validate_true' ?
      this.auth.postEstabelecimento(this.estabelecimento, this.estabelecimento.cnpj) :
      this.toast.toastShow('Por gentileza, preencha todos os campos', 'toast_red');

  }

  limpar() {
    this.estabelecimento = {
      nomeValidator: 'validate_base',
      cnpjValidator: 'validate_base',
      cepValidator: 'validate_base',
      enderecoValidator: 'validate_base',
      cidadeValidator: 'validate_base',
      bairroValidator: 'validate_base',
    };
  }
  
  /********************************
   * Formatar Inputs
   ********************************/
  formatarCNPJ() {
    this.estabelecimento.cnpj = this.validator.formatarCNPJ(this.estabelecimento.cnpj.replace(/\D/g, ''));
    this.validator.validarCNPJ(this.estabelecimento.cnpj) ? this.estabelecimento.cnpjValidator = 'validate_true' : this.estabelecimento.cnpjValidator = 'validate_false';
  }
  formatarNome() { this.estabelecimento.nome.length >= 3 ? this.estabelecimento.nomeValidator = 'validate_true' : this.estabelecimento.nomeValidator = 'validate_false'; }
  formatarBairro() { this.estabelecimento.bairro.length >= 3 ? this.estabelecimento.bairroValidator = 'validate_true' : this.estabelecimento.bairroValidator = 'validate_false'; }
  formatarEndereco() { this.estabelecimento.endereco.length < 3 || this.estabelecimento.numero.length < 1 ? this.estabelecimento.enderecoValidator = 'validate_false' : this.estabelecimento.enderecoValidator = 'validate_true'; }
  formatarCidade() { this.estabelecimento.cidade.length < 3 ? this.estabelecimento.cidadeValidator = 'validate_false' : this.estabelecimento.cidadeValidator = 'validate_true'; }
  formatarCEP() {
    this.estabelecimento.cep = this.validator.formatarCEP(this.estabelecimento.cep.replace(/\D/g, ''));
    this.estabelecimento.cep.length == 9 ? this.estabelecimento.cepValidator = 'validate_true' : this.estabelecimento.cepValidator = 'validate_false';
  }
}
