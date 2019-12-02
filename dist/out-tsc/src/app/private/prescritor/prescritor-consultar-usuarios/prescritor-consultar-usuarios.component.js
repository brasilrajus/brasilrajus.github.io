import * as tslib_1 from "tslib";
import { ToastService } from './../../../services/toast.service';
import { AuthService } from './../../../services/auth.service';
import { ValidatorsService } from './../../../services/validators.service';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
let PrescritorConsultarUsuariosComponent = class PrescritorConsultarUsuariosComponent {
    constructor(validator, auth, toast) {
        this.validator = validator;
        this.auth = auth;
        this.toast = toast;
        this.paciente = {
            cpfValidator: 'validate_base'
        };
    }
    ngOnInit() {
        //this.slides.slideTo(3);
    }
    validarCpf() {
        this.paciente.cpf = this.validator.formatarCPF(this.paciente.cpf.replace(/\D/g, ''));
        let paciente = this.paciente.cpf.replace(/\D/g, '');
        this.validator.validarCPF(paciente) ? this.paciente.cpfValidator = 'validate_true' : this.paciente.cpfValidator = 'validate_false';
    }
    consultar() {
        this.auth.consultaPacientePorCPF(this.paciente.cpf.replace(/\D/g, ''));
    }
    ativarUsuario() {
        this.auth.ativarPaciente();
    }
    atendimento(etapa) {
        etapa == 'inicio' ? this.slides.slideNext() :
            etapa == 'toMedicacoes' ? this.slides.slideNext() : console.log();
    }
};
tslib_1.__decorate([
    ViewChild(IonSlides, { static: true }),
    tslib_1.__metadata("design:type", IonSlides)
], PrescritorConsultarUsuariosComponent.prototype, "slides", void 0);
PrescritorConsultarUsuariosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-prescritor-consultar-usuarios',
        templateUrl: './prescritor-consultar-usuarios.component.html',
        styleUrls: ['./prescritor-consultar-usuarios.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ValidatorsService,
        AuthService,
        ToastService])
], PrescritorConsultarUsuariosComponent);
export { PrescritorConsultarUsuariosComponent };
//# sourceMappingURL=prescritor-consultar-usuarios.component.js.map