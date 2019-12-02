import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
let HomeGuardService = class HomeGuardService {
    constructor(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            this.afAuth.user.subscribe((user) => {
                if (!user) {
                    this.navCtrl.navigateRoot(['']);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
};
HomeGuardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        AngularFireAuth])
], HomeGuardService);
export { HomeGuardService };
//# sourceMappingURL=home-guard.service.js.map