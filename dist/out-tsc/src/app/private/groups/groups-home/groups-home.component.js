import * as tslib_1 from "tslib";
import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
let GroupsHomeComponent = class GroupsHomeComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    deslogar() {
        this.auth.signOut();
    }
};
GroupsHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-groups-home',
        templateUrl: './groups-home.component.html',
        styleUrls: ['./groups-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], GroupsHomeComponent);
export { GroupsHomeComponent };
//# sourceMappingURL=groups-home.component.js.map