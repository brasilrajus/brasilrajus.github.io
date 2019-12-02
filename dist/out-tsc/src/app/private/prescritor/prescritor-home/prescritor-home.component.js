import * as tslib_1 from "tslib";
import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
let PrescritorHomeComponent = class PrescritorHomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    deslogar() {
        this.auth.signOut();
    }
};
PrescritorHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-prescritor-home',
        templateUrl: './prescritor-home.component.html',
        styleUrls: ['./prescritor-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], PrescritorHomeComponent);
export { PrescritorHomeComponent };
//# sourceMappingURL=prescritor-home.component.js.map