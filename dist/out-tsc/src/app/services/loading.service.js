import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
let LoadingService = class LoadingService {
    constructor(loading) {
        this.loading = loading;
    }
    loadingGreen(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                spinner: "bubbles",
                message,
                translucent: true,
                cssClass: 'load_green'
            });
            return yield loading.present();
        });
    }
};
LoadingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController])
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map