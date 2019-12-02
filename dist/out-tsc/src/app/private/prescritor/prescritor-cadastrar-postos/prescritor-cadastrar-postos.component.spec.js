import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PrescritorCadastrarPostosComponent } from './prescritor-cadastrar-postos.component';
describe('PrescritorCadastrarPostosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrescritorCadastrarPostosComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PrescritorCadastrarPostosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prescritor-cadastrar-postos.component.spec.js.map