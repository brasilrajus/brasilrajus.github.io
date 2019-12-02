import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AdministradorCadastrarPostosComponent } from './administrador-cadastrar-postos.component';
describe('AdministradorCadastrarPostosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdministradorCadastrarPostosComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AdministradorCadastrarPostosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=administrador-cadastrar-postos.component.spec.js.map