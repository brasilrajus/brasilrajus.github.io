import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlterarSenhaComponent } from './alterar-senha.component';
describe('AlterarSenhaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlterarSenhaComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AlterarSenhaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=alterar-senha.component.spec.js.map