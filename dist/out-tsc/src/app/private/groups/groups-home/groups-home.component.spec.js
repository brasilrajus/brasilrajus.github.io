import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GroupsHomeComponent } from './groups-home.component';
describe('GroupsHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupsHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(GroupsHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=groups-home.component.spec.js.map