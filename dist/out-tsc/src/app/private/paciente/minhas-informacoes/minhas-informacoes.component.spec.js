import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MinhasInformacoesComponent } from './minhas-informacoes.component';
describe('MinhasInformacoesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MinhasInformacoesComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MinhasInformacoesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=minhas-informacoes.component.spec.js.map