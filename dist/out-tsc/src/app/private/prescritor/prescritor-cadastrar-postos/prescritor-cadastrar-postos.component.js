import * as tslib_1 from "tslib";
import { ToastService } from './../../../services/toast.service';
import { AuthService } from './../../../services/auth.service';
import { ValidatorsService } from './../../../services/validators.service';
import { Component } from '@angular/core';
let PrescritorCadastrarPostosComponent = class PrescritorCadastrarPostosComponent {
    constructor(validator, auth, toast) {
        this.validator = validator;
        this.auth = auth;
        this.toast = toast;
        this.estabelecimento = {
            nomeValidator: 'validate_base',
            cnpjValidator: 'validate_base',
            cepValidator: 'validate_base',
            enderecoValidator: 'validate_base',
            cidadeValidator: 'validate_base',
            bairroValidator: 'validate_base',
        };
    }
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
};
PrescritorCadastrarPostosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-prescritor-cadastrar-postos',
        templateUrl: './prescritor-cadastrar-postos.component.html',
        styleUrls: ['./prescritor-cadastrar-postos.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ValidatorsService,
        AuthService,
        ToastService])
], PrescritorCadastrarPostosComponent);
export { PrescritorCadastrarPostosComponent };
//# sourceMappingURL=prescritor-cadastrar-postos.component.js.map