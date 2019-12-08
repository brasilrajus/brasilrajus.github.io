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

  public nome; public cnpj; public cep; public bairro; public endereco; public cidade; public numero;

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
      this.auth.postEstabelecimento(this.cnpj, this.nome, this.cep, this.bairro, this.endereco, this.cidade, this.numero) :
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
    this.cnpj = this.validator.formatarCNPJ(this.cnpj.replace(/\D/g, ''));
    this.validator.validarCNPJ(this.cnpj) ? this.estabelecimento.cnpjValidator = 'validate_true' : this.estabelecimento.cnpjValidator = 'validate_false';
  }
  formatarNome() { this.nome.length >= 3 ? this.estabelecimento.nomeValidator = 'validate_true' : this.estabelecimento.nomeValidator = 'validate_false'; }
  formatarBairro() { this.bairro.length >= 3 ? this.estabelecimento.bairroValidator = 'validate_true' : this.estabelecimento.bairroValidator = 'validate_false'; }
  formatarEndereco() { this.endereco.length < 3 || this.numero.length < 1 ? this.estabelecimento.enderecoValidator = 'validate_false' : this.estabelecimento.enderecoValidator = 'validate_true'; }
  formatarCidade() { this.cidade.length < 3 ? this.estabelecimento.cidadeValidator = 'validate_false' : this.estabelecimento.cidadeValidator = 'validate_true'; }
  formatarCEP() {
    this.cep = this.validator.formatarCEP(this.cep.replace(/\D/g, ''));
    this.cep.length == 9 ? this.estabelecimento.cepValidator = 'validate_true' : this.estabelecimento.cepValidator = 'validate_false';
  }
}
