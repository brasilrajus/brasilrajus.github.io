import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AgendaMedicaComponent } from './agenda-medica.component';
describe('AgendaMedicaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AgendaMedicaComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AgendaMedicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agenda-medica.component.spec.js.map