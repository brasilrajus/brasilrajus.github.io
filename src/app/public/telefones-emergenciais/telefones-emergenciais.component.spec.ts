import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonesEmergenciaisComponent } from './telefones-emergenciais.component';

describe('TelefonesEmergenciaisComponent', () => {
  let component: TelefonesEmergenciaisComponent;
  let fixture: ComponentFixture<TelefonesEmergenciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesEmergenciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonesEmergenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
