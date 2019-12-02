import * as tslib_1 from "tslib";
import { AuthService } from './../../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { IonSlides } from '@ionic/angular';
let LoginComponent = class LoginComponent {
    constructor(auth, load) {
        this.auth = auth;
        this.load = load;
        this.user = {};
        this.inputPassword = true;
    }
    ngOnInit() { }
    acessarOrRegister(func) {
        if (this.user.email != null && this.user.email != undefined && this.user.password != null && this.user.password != undefined) {
            func === 'Acessar' ? this.auth.login(this.user.email, this.user.password) :
                func === 'Recuperar Senha' ? this.auth.recoveryPassword(this.user.email) :
                    this.auth.registerUser(this.user.email, this.user.password);
        }
        ;
    }
    acessarComGmail() {
        this.auth.loginWithGoogle();
    }
    alternarBotoes(i) {
        this.slides.slideTo(i);
        if (i == 0 || i == 1) {
            this.slidesGoogle.slideTo(0);
            this.inputPassword = false;
        }
        else {
            this.slidesGoogle.slideTo(1);
        }
    }
};
tslib_1.__decorate([
    ViewChild('slides', { static: true }),
    tslib_1.__metadata("design:type", IonSlides)
], LoginComponent.prototype, "slides", void 0);
tslib_1.__decorate([
    ViewChild('slidesGoogle', { static: true }),
    tslib_1.__metadata("design:type", IonSlides)
], LoginComponent.prototype, "slidesGoogle", void 0);
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        LoadingService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map