import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
let PacienteGuardsService = class PacienteGuardsService {
    constructor(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            this.afAuth.user.subscribe((user) => {
                if (user) {
                    this.navCtrl.navigateRoot(['/home']);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
};
PacienteGuardsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AngularFireAuth])
], PacienteGuardsService);
export { PacienteGuardsService };
//# sourceMappingURL=paciente-guards.service.js.map