import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePrecadastroComponent } from './home-precadastro.component';
describe('HomePrecadastroComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePrecadastroComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(HomePrecadastroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home-precadastro.component.spec.js.map