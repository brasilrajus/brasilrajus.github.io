import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AdministradorHomeComponent } from './administrador-home.component';
describe('AdministradorHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdministradorHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AdministradorHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=administrador-home.component.spec.js.map