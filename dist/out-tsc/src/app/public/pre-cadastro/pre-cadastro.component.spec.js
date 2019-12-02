import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PreCadastroComponent } from './pre-cadastro.component';
describe('PreCadastroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreCadastroComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PreCadastroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pre-cadastro.component.spec.js.map