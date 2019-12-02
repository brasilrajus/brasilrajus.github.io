import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrescritorCadastrarPostosComponent } from './prescritor-cadastrar-postos.component';

describe('PrescritorCadastrarPostosComponent', () => {
  let component: PrescritorCadastrarPostosComponent;
  let fixture: ComponentFixture<PrescritorCadastrarPostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescritorCadastrarPostosComponent ],
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
