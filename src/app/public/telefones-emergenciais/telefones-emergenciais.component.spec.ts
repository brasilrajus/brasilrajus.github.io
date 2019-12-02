import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefonesEmergenciaisComponent } from './telefones-emergenciais.component';

describe('TelefonesEmergenciaisComponent', () => {
  let component: TelefonesEmergenciaisComponent;
  let fixture: ComponentFixture<TelefonesEmergenciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesEmergenciaisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefonesEmergenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
