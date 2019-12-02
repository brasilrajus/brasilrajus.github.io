import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PrescritorHomeComponent } from './prescritor-home.component';
describe('PrescritorHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrescritorHomeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PrescritorHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prescritor-home.component.spec.js.map