import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RootHomeComponent } from './root-home.component';
describe('RootHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RootHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RootHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=root-home.component.spec.js.map