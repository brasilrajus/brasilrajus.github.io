import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PacienteHomeComponent } from './paciente-home.component';
describe('PacienteHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PacienteHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PacienteHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=paciente-home.component.spec.js.map