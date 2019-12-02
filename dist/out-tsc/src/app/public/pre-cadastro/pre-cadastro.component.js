import * as tslib_1 from "tslib";
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';
import { ToastService } from 'src/app/services/toast.service';
let PreCadastroComponent = class PreCadastroComponent {
    constructor(validator, auth, toast) {
        this.validator = validator;
        this.auth = auth;
        this.toast = toast;
        this.user = {
            nomeValidator: 'validate_base',
            emailValidator: 'validate_base',
            cpfValidator: 'validate_base',
            telefoneValidator: 'validate_base',
            susValidator: 'validate_base',
        };
    }
    ngOnInit() { }
    adicionar() {
        this.user.nomeValidator == 'validate_true' &&
            this.user.emailValidator == 'validate_true' &&
            this.user.cpfValidator == 'validate_true' &&
            this.user.telefoneValidator == 'validate_true' &&
            this.user.susValidator == 'validate_true' ?
            this.auth.adicionarUser(this.user, this.user.cpf) :
            this.toast.toastShow('Por gentileza, preencha todos os campos', 'toast_red');
    }
    limpar() {
        this.user = {
            nomeValidator: 'validate_base',
            cpfValidator: 'validate_base',
            telefoneValidator: 'validate_base',
            emailValidator: 'validate_base',
            susValidator: 'validate_base'
        };
    }
    /********************************
     * Formatar Inputs
     ********************************/
    formatarNome() {
        let qntNomes = this.user.nome.split(' ').length;
        qntNomes >= 2 ? this.user.nomeValidator = 'validate_true' : this.user.nomeValidator = 'validate_false';
    }
    formatarCPF() {
        this.user.cpf = this.validator.formatarCPF(this.user.cpf.replace(/\D/g, ''));
        let cpf = this.user.cpf.replace(/\D/g, '');
        this.validator.validarCPF(cpf) ? this.user.cpfValidator = 'validate_true' : this.user.cpfValidator = 'validate_false';
    }
    formatarEmail() {
        this.validator.validarEmail(this.user.email) === true ? this.user.emailValidator = 'validate_true' : this.user.emailValidator = 'validate_false';
    }
    formatarTelefone() {
        this.user.telefone = this.validator.formatarTelefone(this.user.telefone);
        console.log(this.user.telefone.length);
        this.user.telefone.length >= 15 ? this.user.telefoneValidator = 'validate_true' : this.user.telefoneValidator = 'validate_false';
    }
    formatarSus() {
        this.user.sus = this.validator.formatarCartaoSus(this.user.sus);
        console.log(this.user.sus.length);
        this.user.sus.length >= 18 ? this.user.susValidator = 'validate_true' : this.user.susValidator = 'validate_false';
    }
};
PreCadastroComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pre-cadastro',
        templateUrl: './pre-cadastro.component.html',
        styleUrls: ['./pre-cadastro.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ValidatorsService,
        AuthService,
        ToastService])
], PreCadastroComponent);
export { PreCadastroComponent };
//# sourceMappingURL=pre-cadastro.component.js.map