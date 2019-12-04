import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteCaixaDeFerramentasComponent } from './paciente-caixa-de-ferramentas.component';

describe('PacienteCaixaDeFerramentasComponent', () => {
  let component: PacienteCaixaDeFerramentasComponent;
  let fixture: ComponentFixture<PacienteCaixaDeFerramentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteCaixaDeFerramentasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteCaixaDeFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
