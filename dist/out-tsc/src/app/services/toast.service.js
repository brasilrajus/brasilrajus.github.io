import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    toastShow(message, cssClass) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                position: 'bottom',
                cssClass: cssClass,
                duration: 3000
            });
            toast.present();
        });
    }
};
ToastService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController])
], ToastService);
export { ToastService };
//# sourceMappingURL=toast.service.js.map