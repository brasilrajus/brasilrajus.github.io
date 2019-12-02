import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TelefonesEmergenciaisComponent } from './telefones-emergenciais.component';
describe('TelefonesEmergenciaisComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TelefonesEmergenciaisComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TelefonesEmergenciaisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=telefones-emergenciais.component.spec.js.map