import * as tslib_1 from "tslib";
import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
let PacienteHomeComponent = class PacienteHomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    deslogar() {
        this.auth.signOut();
    }
};
PacienteHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-paciente-home',
        templateUrl: './paciente-home.component.html',
        styleUrls: ['./paciente-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], PacienteHomeComponent);
export { PacienteHomeComponent };
//# sourceMappingURL=paciente-home.component.js.map