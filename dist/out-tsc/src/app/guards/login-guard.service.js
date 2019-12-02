import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
let LoginGuardService = class LoginGuardService {
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
LoginGuardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AngularFireAuth])
], LoginGuardService);
export { LoginGuardService };
//# sourceMappingURL=login-guard.service.js.map